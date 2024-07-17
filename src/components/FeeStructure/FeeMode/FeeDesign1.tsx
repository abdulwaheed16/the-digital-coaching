"use client";
import { Fee, FeeStructure } from "@/types/fee-structure";
import React from "react";
import FeeCard from "./FeeCard";

interface IProps {
  feedata: Fee[];
  feemode: string;
}
const FeeDesign1 = ({ feedata, feemode }: IProps) => {
  return (
    <>
      {feedata?.map((fee: Fee, index: number) => (
        <div key={index}>
          <h3 className="rounded-md border-b-2 border-b-primary bg-gray-dark p-2 text-center text-2xl font-medium tracking-wide text-white">
            {fee.program}
          </h3>
          <div className="mx-auto grid w-full justify-center gap-2 px-2 pb-10 pt-6 md:grid-cols-2 md:gap-4 md:px-4 md:py-12 lg:grid-cols-3 xl:w-8/12">
            {fee?.feeStructure?.map(
              (structure: FeeStructure, index: number) => (
                <FeeCard structure={structure} feemode={feemode} program={fee.program} key={index} />
              ),
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default FeeDesign1;
