import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fee, FeeStructure } from "@/types/fee-structure";
import FeeCard from "./FeeCard";

interface IProps {
  feedata: Fee[];
  feemode: string;
}
const FeeDesign2 = ({ feedata, feemode }: IProps) => {
  return (
    <Tabs defaultValue="O-Level / IGCSE" className="mx-auto w-full xl:w-8/12">
      <TabsList className="mb-12 h-14 w-full">
        {feedata?.map((fee: Fee, index: number) => (
          <TabsTrigger
            value={fee?.program}
            key={fee.program}
            className="text-md h-12 font-medium"
          >
            {fee?.program}
          </TabsTrigger>
        ))}
      </TabsList>
      {feedata?.map((fee: Fee) => (
        <TabsContent
          value={fee?.program}
          key={fee?.program}
          className="mt-0 grid grid-cols-3 gap-3"
        >
          {fee?.feeStructure?.map((structure: FeeStructure, index: number) => (
            <FeeCard
              structure={structure}
              feemode={feemode}
              program={fee.program}
              key={index}
            />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default FeeDesign2;
