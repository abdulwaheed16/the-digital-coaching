export type FeeStructure = {
  packageName: string;
  lessonsPerWeek: number;
  fee: {
    individual: number;
    group: number;
  };
};

export type Fee = {
  stream: string;
  program: string;
  feemode: string;
  feeStructure: FeeStructure[];
};
