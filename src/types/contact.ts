import { Dispatch, SetStateAction } from "react";

export interface IFormContext {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
  previousStep: number;
}
