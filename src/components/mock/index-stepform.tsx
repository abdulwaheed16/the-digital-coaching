"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Subjects, StudentInfo, Stream } from "../Contact/Steps";

type Inputs = z.infer<typeof ContactFormSchema>;

const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: ["firstName", "lastName", "email"],
  },
  {
    id: "Step 2",
    name: "Personal Information",
    fields: ["firstName", "lastName", "email"],
  },
  {
    id: "Step 3",
    name: "Address",
    fields: ["country", "state", "city", "street", "zip"],
  },
  { id: "Step 4", name: "Complete" },
];

export default function ContactForm() {
  const [stream, setStream] = useState<string>("");
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  type Fields = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as Fields[], { shouldFocus: true });

    // if (!output) return;

    // if (!stream) {
    //   toast("Please select a stream");
    //   return;
    // }

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="inset-0 mx-auto flex min-h-[90vh] w-full flex-col justify-between overflow-hidden bg-white p-24 py-16 shadow-lg dark:bg-gray-dark md:py-20 lg:py-28 xl:w-2/3">
      {/* steps */}
      {/* <ProgressBar currentStep={currentStep} /> */}

      {/* Form */}
      <form className="py-4" onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          // <PersonalInfo delta={delta} errors={errors} register={register} />
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Stream onValueChang={(value) => setStream(value)} />
          </motion.div>
        )}

        {currentStep === 1 && (
          // <PersonalInfo delta={delta} errors={errors} register={register} />
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Subjects />
          </motion.div>
        )}
        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <StudentInfo />
          </motion.div>
        )}

        {currentStep === 3 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Complete
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Thank you for your submission.
            </p>
          </>
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className={`rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50 ${currentStep === 0 ? "bg-gray-200" : ""}`}
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg> */}
            Go Back
          </button>
          {currentStep === 2 ? (
            <button
              type="button"
              onClick={next}
              className="rounded bg-sky-600 px-2 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-sky-200 hover:bg-sky-700"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg> */}
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
