import React from "react";
import Link from "next/link";
import { FeeStructure } from "@/types/fee-structure";

interface IProps {
  structure: FeeStructure;
  feemode: string;
  program: string;
}

const FeeCard = ({ structure, feemode, program }: IProps) => {
  const { fee, lessonsPerWeek, packageName } = structure;

  return (
    <div className="border-b-primay flex w-full flex-col rounded-3xl border-b-4 border-primary border-t-gray-100 bg-white text-gray-dark shadow-lg dark:border-b-4 dark:border-b-primary dark:bg-dark dark:text-white">
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="grid w-full grid-cols-1 items-center justify-center text-left">
          <div>
            <h2 className="text-lg font-medium tracking-tighter  lg:text-3xl">
              {packageName}
            </h2>
            <p className="text-md mt-2">
              <span className="">{lessonsPerWeek} </span>
              Lessons/Week
            </p>
          </div>
          <div className="mt-6">
            {/* <h3 className="my-2 w-1/2 rounded-full bg-gradient-to-r from-primary to-gray-dark p-1 text-center text-white">
                        One-to-One{" "}
                      </h3> */}
            <p>
              <span className="text-4xl font-light tracking-tight">
                {feemode === "international" ? "$" : "PKR"} {fee?.individual}
              </span>
              <span className="text-base font-normal"> Monthly/Subject </span>
            </p>
            <p className="">For One-to-One Classes</p>
          </div>
          <div className="mt-6">
            {/* <h3 className="my-2 w-1/3 rounded-full bg-gradient-to-r from-primary to-gray-dark p-1 text-center text-white">
                        Group{" "}
                      </h3> */}
            <p>
              <span className="text-4xl font-light tracking-tight">
                ${fee?.group}
              </span>
              <span className="text-base font-normal"> Monthly/Subject </span>
            </p>
            <p className="">For Group Classes</p>
          </div>
        </div>
      </div>
      <div className="flex px-6 pb-8 sm:px-8">
        <Link
          href={{
            pathname: "/contact",
            query: { program, packageName },
          }}
          aria-describedby="tier-company"
          className="nline-flex hover:ring-primarys group flex w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 text-center text-sm text-white duration-200 hover:ring-2 focus:outline-none focus-visible:outline-primary focus-visible:ring-primary"
        >
          <span className="transition duration-200 ease-in-out group-hover:scale-110">
            Get started
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FeeCard;
