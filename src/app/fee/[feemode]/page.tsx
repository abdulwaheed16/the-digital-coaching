import FeeMode from "@/components/FeeStructure/FeeMode";
import React from "react";

interface IProps {
  params: { feemode: string };
}
const FeeModePage = ({ params }: IProps) => {
  console.log(params); // Output: { feemode: "domestic" } or { feemode: "international" }
  return (
    <>
      <FeeMode feemode={params?.feemode} />
    </>
  );
};

export default FeeModePage;
