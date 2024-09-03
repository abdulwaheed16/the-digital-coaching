"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { IFormContext } from "@/types";

const FormContext = createContext<IFormContext>({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0,
  previousStep: 0,
});

interface IProps {
  children: ReactNode;
}

export function FormProvider({ children }: IProps) {
  const [formData, setFormData] = useState();
  const [step, setStep] = useState(1);
  const [previousStep, setPreviousStep] = useState(1);

  function onHandleNext() {
    setPreviousStep(step);
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setPreviousStep(step);
    setStep((prev) => prev - 1);
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        onHandleBack,
        onHandleNext,
        step,
        previousStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

// FormContext--------------------------------
export function useFormState() {
  return useContext(FormContext);
}
