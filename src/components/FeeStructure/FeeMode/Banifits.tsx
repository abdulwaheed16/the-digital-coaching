import React from "react";
import { banifits } from "../feeData";
import { CircleCheckBig } from "lucide-react";

const Banifits = () => {
  return (
    <div className="pb-10 pt-12">
      <h2 className=" pb-4 pt-10 text-center text-3xl font-medium">
        You will get{" "}
      </h2>
      {/* banifits card */}
      <div className="mx-auto xl:w-8/12">
        <div className="flex justify-center">
          <ul className="grid gap-3 px-2 py-4 md:grid-cols-2 lg:grid-cols-3">
            {banifits?.map((banifit: string, index: number) => (
              <div
                className="border-b-primay mx-auto w-full rounded-xl border-b-2 border-primary border-t-gray-100 bg-white px-4 py-2 text-gray-dark shadow-lg dark:border-b-2  dark:border-b-primary dark:bg-dark dark:text-white md:py-4 "
                key={banifit}
              >
                <li className="flex items-center gap-2  text-lg text-dark dark:text-white">
                  <CircleCheckBig className="text-green-500" />
                  {banifit}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banifits;
