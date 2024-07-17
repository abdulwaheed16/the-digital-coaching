import { z } from "zod";

export const RegisterFormSchema = z.object({
  fullName: z.string().nonempty({ message: "Name is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email should contain '@' symbol" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
  // termsAndConditions: z.boolean({
  //   message: "Terms and Conditions must be provided",
  // }),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().nonempty({ message: "Password is required" }),
});
