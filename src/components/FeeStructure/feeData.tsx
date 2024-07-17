import { Fee } from "@/types/fee-structure";

export const feeData: Fee[] = [
  {
    stream: "",
    program: "O-Level / IGCSE",
    feemode: "international",
    feeStructure: [
      {
        packageName: "Economy",
        lessonsPerWeek: 2,
        fee: {
          individual: 100,
          group: 50,
        },
      },
      {
        packageName: "Standard",
        lessonsPerWeek: 3,
        fee: {
          individual: 100,
          group: 50,
        },
      },
      {
        packageName: "Premium",
        lessonsPerWeek: 4,
        fee: {
          individual: 100,
          group: 50,
        },
      },
    ],
  },
  {
    stream: "",
    program: "AS-Level",
    feemode: "international",
    feeStructure: [
      {
        packageName: "Economy",
        lessonsPerWeek: 2,
        fee: {
          individual: 200,
          group: 50,
        },
      },
      {
        packageName: "Standard",
        lessonsPerWeek: 3,
        fee: {
          individual: 200,
          group: 50,
        },
      },
      {
        packageName: "Premium",
        lessonsPerWeek: 4,
        fee: {
          individual: 200,
          group: 50,
        },
      },
    ],
  },
  {
    stream: "",
    program: "A-Level",
    feemode: "international",
    feeStructure: [
      {
        packageName: "Economy",
        lessonsPerWeek: 2,
        fee: {
          individual: 300,
          group: 50,
        },
      },
      {
        packageName: "Standard",
        lessonsPerWeek: 3,
        fee: {
          individual: 300,
          group: 50,
        },
      },
      {
        packageName: "Premium",
        lessonsPerWeek: 4,
        fee: {
          individual: 300,
          group: 50,
        },
      },
    ],
  },

  // Domestic mode----------------------------
  {
    stream: "",
    program: "O-Level / IGCSE",
    feemode: "domestic",
    feeStructure: [
      {
        packageName: "Economy",
        lessonsPerWeek: 2,
        fee: {
          individual: 100,
          group: 50,
        },
      },
      {
        packageName: "Standard",
        lessonsPerWeek: 3,
        fee: {
          individual: 600,
          group: 50,
        },
      },
      {
        packageName: "Premium",
        lessonsPerWeek: 4,
        fee: {
          individual: 100,
          group: 50,
        },
      },
    ],
  },
  {
    stream: "",
    program: "AS-Level",
    feemode: "domestic",
    feeStructure: [
      {
        packageName: "Economy",
        lessonsPerWeek: 2,
        fee: {
          individual: 90,
          group: 50,
        },
      },
      {
        packageName: "Standard",
        lessonsPerWeek: 3,
        fee: {
          individual: 110,
          group: 50,
        },
      },
      {
        packageName: "Premium",
        lessonsPerWeek: 4,
        fee: {
          individual: 140,
          group: 50,
        },
      },
    ],
  },
  {
    stream: "",
    program: "A-Level",
    feemode: "domestic",
    feeStructure: [
      {
        packageName: "Economy",
        lessonsPerWeek: 2,
        fee: {
          individual: 150,
          group: 50,
        },
      },
      {
        packageName: "Standard",
        lessonsPerWeek: 3,
        fee: {
          individual: 200,
          group: 50,
        },
      },
      {
        packageName: "Premium",
        lessonsPerWeek: 4,
        fee: {
          individual: 250,
          group: 50,
        },
      },
    ],
  },
];

// Benifits

export const banifits: string[] = [
  "One-to-Lectures",
  "Live & Interactive Lessons",
  "Recorded Lectures available",
  "Past Papers' Practice",
  "Resources and Notes",
  "Quiz and progress reports",
  "Teaching pace set Individually",
  "Session duration set individually",
];
