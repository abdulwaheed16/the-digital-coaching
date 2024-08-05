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

interface IStreamProps {
  onValueChang: (value: string) => void;
}
const Stream = ({ onValueChang }: IStreamProps) => {
  const [checkedStream, setCheckedStream] = useState("");
  const streams: string[] = [
    "IGCSE",
    "O Level",
    "A Level (As)",
    "A Level (A2)",
    "Matric (Part I)",
    "Matric (Part II)",
    "Inter (Part I",
    "Inter (Part II)",
  ];

  const onSelect = (value: string) => {
    console.log("Selected stream:", value);
    onValueChang(value);
  };
  return (
    <div className="">
      {/* Select Stream */}
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
              className={`${styles.checkbox_label} cursor-pointer rounded-md p-2  ${stream !== checkedStream ? "ring-2 ring-dark dark:ring-white" : "ring-1 ring-dark dark:ring-white/50"}`}
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
                  color="#fff"
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
    </div>
  );
};

export default Stream;
