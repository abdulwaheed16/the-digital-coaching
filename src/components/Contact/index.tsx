"use client";
import React from "react";
import { FormProvider } from "./FormContext";
import { ActiveStepFormComponent } from "./Steps";
import FormNavigation from "./Steps/FormNavigation";

const Contact = () => {
  return (
    <FormProvider>
      <div className="relative inset-0 mx-auto mb-10 flex min-h-[85vh] w-full flex-col justify-between  overflow-hidden bg-white px-2 py-8 shadow-lg dark:bg-gray-dark md:px-12 md:py-12 lg:py-16 xl:w-2/3">
        <ActiveStepFormComponent />
        {/* <FormNavigation /> */}
      </div>
    </FormProvider>
  );
};

export default Contact;
