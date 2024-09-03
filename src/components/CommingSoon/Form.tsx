"use client";
import React from "react";
import { Input } from "../ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { NewsLetter } from "@/types";
// import { newsLetterService } from "@/services/newsLetterService";

const EmailForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsLetter>();

  const processForm: SubmitHandler<NewsLetter> = async (data) => {
    console.log("Newsletter data", data);
    // try {
    //   const {
    //     data: responseData,
    //     isSuccess,
    //     isPending,
    //     isError,
    //   } = await newsLetterService({ email: data.email });
    //   reset();
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="mx-auto mt-8 flex flex-col items-center justify-center gap-3  rounded-lg bg-white px-6 py-8 shadow-md md:w-3/4 md:flex-row"
    >
      <div className="flex flex-col items-start ">
        <Input
          {...register("email", { required: "Please enter your email" })}
          placeholder="Enter your email address"
          className="text-md focus-visible:ring-primay w-full rounded-md border border-input bg-background bg-white px-3 py-2 font-medium text-gray-700 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        />
        {errors.email && (
          <p className=" mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <button
        type="submit"
        className=" hover:bg-ring-2 text-nowrap rounded bg-dark px-4 py-2 font-bold text-white transition delay-0 duration-200  hover:scale-105 hover:ring-gray-dark"
      >
        Subscribe for Updates
      </button>
    </form>
  );
};

export default EmailForm;
