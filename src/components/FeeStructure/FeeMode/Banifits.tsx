import React from "react";
import { banifits } from "../feeData";
import { CircleCheckBig } from "lucide-react";

const Banifits = () => {
  return (
    <div className="mx-auto pb-10 pt-12 xl:w-8/12">
      <h2 className=" px-2 pb-4 pt-10 text-start text-2xl font-normal">
        Banifits you will get along with each package
      </h2>
      {/* banifits card */}
      <div className="">
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
