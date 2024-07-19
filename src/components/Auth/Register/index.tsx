"use client";
import Link from "next/link";
import React, { useState } from "react";
import GoogleAuth from "../GoogleAuth";
import { Button } from "@/components/ui/button";
import AuthButton from "@/components/ui/AuthButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema } from "@/lib/formSchema";
import { RegisterForm } from "@/types/auth";
import { registerUser } from "../../../../actions/auth";
import { z } from "zod";
import { toast } from "sonner";

const Register = () => {
  const [isPending, setIsPending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const processForm: SubmitHandler<RegisterForm> = async (data) => {
    try {
      console.log("Registeration data", data);
      setIsPending(true);
      const result = await registerUser(data);
      if (result?.isUserExists) {
        toast(result?.message, { duration: 3000 });
        return;
      }

      if (result?.isSuccess) {
        toast(result?.message);
        reset();
      }
    } catch (error) {
      console.log("Failed to register user, Error: ", error);
      toast(error.message, { duration: 3000 });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
            <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Register
            </h3>
            <p className="mb-11 text-center text-base font-medium text-body-color"></p>

            {/* Google Authentication */}
            <GoogleAuth />

            {/* Register with Credentials */}
            <div className="mb-8 flex items-center justify-center">
              <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
              <p className="w-full px-5 text-center text-base font-medium text-body-color">
                Or, Register with your email
              </p>
              <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
            </div>
            <form onSubmit={handleSubmit(processForm)}>
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm text-dark dark:text-white"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <input
                  type="text"
                  {...register("fullName")}
                  placeholder="Enter your full name"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
                {/* error */}
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm text-dark dark:text-white"
                >
                  {" "}
                  Email{" "}
                </label>
                <input
                  {...register("email")}
                  placeholder="Enter your Email"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
                {/* error */}
                {errors.email && (
                  <p className="mt-1 text-sm  text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-8">
                <label
                  htmlFor="password"
                  className="mb-3 block text-sm text-dark dark:text-white"
                >
                  {" "}
                  Your Password{" "}
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Enter your Password"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
                {/* error */}
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mb-8 flex">
                <label
                  htmlFor="termsAndConditions"
                  className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="termsAndConditions"
                      className="sr-only"
                      // {...register("termsAndConditions")}
                    />
                    <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                      <span className="opacity-0">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                            strokeWidth="0.4"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <span>
                    By creating account means you agree to the
                    <Link href="#0" className="text-primary hover:underline">
                      {" "}
                      Terms and Conditions{" "}
                    </Link>
                    , and our
                    <Link href="#0" className="text-primary hover:underline">
                      {" "}
                      Privacy Policy{" "}
                    </Link>
                  </span>
                </label>
              </div>
              <div className="mb-6">
                <AuthButton text="Register" isPending={isPending} />
              </div>
            </form>
            <p className="text-center text-base font-medium text-body-color">
              Already using Startup?{" "}
              <Link href="/signin" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
