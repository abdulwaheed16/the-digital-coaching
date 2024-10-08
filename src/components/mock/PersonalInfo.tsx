import React from "react";
import { motion } from "framer-motion";

interface IProps {
  delta: number;
  register: (name: string, options?: any) => any;
  errors: Record<string, any>;
}
const PersonalInfo = ({ delta, errors, register }: IProps) => {
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Provide your personal details.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="mb-8 sm:col-span-3">
          <label
            htmlFor="firstName"
            className="mb-3 block text-sm font-medium text-dark dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            placeholder="Enter your name"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />

          {errors.firstName?.message && (
            <p className="mt-2 text-sm text-red-400">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            {errors.lastName?.message && (
              <p className="mt-2 text-sm text-red-400">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              {...register("email")}
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            {errors.email?.message && (
              <p className="mt-2 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
