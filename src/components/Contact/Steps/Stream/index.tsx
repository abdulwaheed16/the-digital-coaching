"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "@/styles/contact.module.css";
import { useFormState } from "../../FormContext";
import FormNavigation from "../FormNavigation";

interface IStreamProps {
  onValueChang?: (value: string) => void;
}
const Stream = ({ onValueChang }: IStreamProps) => {
  const [checkedStream, setCheckedStream] = useState("");
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();

  const streams: string[] = [
    "IGCSE",
    "O Level",
    "AS Level ",
    "A2 Level ",
    "Matric (Part I)",
    "Matric (Part II)",
    "Inter (Part I",
    "Inter (Part II)",
  ];

  const handleStream = () => {};

  const onSelect = (value: string) => {
    console.log("Selected stream:", value);
    onValueChang(value);
  };
  return (
    <div className="relative mx-auto mb-10 min-h-[85vh]">
      {/* Select Stream */}
      <h2 className="pb-6 text-2xl font-medium">
        Select Your Stream / Program
      </h2>

      <div className="md:hidden">
        <Select onValueChange={onSelect}>
          <SelectTrigger className="h-12 w-full">
            <SelectValue placeholder="Select a stream" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              {streams?.map((stream) => (
                <SelectItem value={stream} key={stream}>
                  {stream}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Choose Package */}
      <div className="hidden md:block">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {streams?.map((stream) => (
            <label
              key={stream}
              className={`${styles.checkbox_label} flex h-14 cursor-pointer items-center rounded-md px-2  ${stream !== checkedStream ? "ring-2 ring-dark dark:ring-white" : "ring-1 ring-dark dark:ring-white/50"}`}
              onClick={() => setCheckedStream(stream)}
            >
              <input
                type="checkbox"
                className={`${styles.checkbox} bg-[#64ccc5]`}
              />
              <div className={`${styles.svg_icon}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  color="white"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                </svg>
              </div>
              <span
                className={`${styles.container} mr-2 bg-slate-800 dark:bg-gray-200`}
              ></span>
              {stream}
            </label>
          ))}
        </div>
      </div>
      <FormNavigation />
    </div>
  );
};

export default Stream;
