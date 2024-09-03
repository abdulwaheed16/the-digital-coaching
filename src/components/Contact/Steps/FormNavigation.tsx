import React from "react";
import { useFormState } from "../FormContext";
import { NextBtn, SubmitBtn } from "@/components/ui/Buttons";
import { Button } from "@/components/ui/button";
import BackBtn from "@/components/ui/Buttons/BackBtn";

const FormNavigation = () => {
  const { onHandleNext, setFormData, onHandleBack, formData, step } =
    useFormState();

  return (
    <div className="absolute  bottom-0 ml-auto mt-12 flex w-full gap-4 md:right-12 md:w-1/3">
      {step > 1 && <BackBtn />}
      {step === 3 ? <SubmitBtn /> : <NextBtn />}
    </div>
  );
};

export default FormNavigation;
