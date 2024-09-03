"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import FormNavigation from "../FormNavigation";
import { Navigation } from "lucide-react";

const initialDummyData: string[] = [
  "Mathematics",
  "Computer Science",
  "Physics",
  "Computer Science",
  "Physics",
  "Mathematics",
];

const Subjects = () => {
  const [subjects, setSubjects] = useState<string[]>(initialDummyData);
  const [inputValue, setInputValue] = useState<string>("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;

    setSubjects((prevSubjects) => [...prevSubjects, inputValue.trim()]);
    setInputValue(""); // Clear the input after submission
  };

  return (
    <div className="relative mx-auto mb-10 min-h-[80vh]">
      <h2 className="text-2xl font-medium">Add Your Subjects</h2>
      <form
        onSubmit={submitHandler}
        className="mt-3 flex w-1/2 items-center gap-3"
      >
        <Input
          placeholder="e.g Maths-0589"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button className="w-1/4 p-2" type="submit">
          Add
        </Button>
      </form>
      <div className="mb-4 mt-8 w-1/2">
        <h3 className="py-3 text-xl font-medium">Your Subjects</h3>
        <ul className="grid grid-cols-2 gap-4">
          {subjects?.map((subject: string, index: number) => (
            <li
              className="flex-grow-1 relative flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-primary"
              key={index}
            >
              <span className="">{subject}</span>
              <span className="absolute left-0 top-0 z-40 hidden h-full w-full rounded-full hover:block">
                del
              </span>
            </li>
          ))}
        </ul>
      </div>
      <FormNavigation />
    </div>
  );
};

export default Subjects;
