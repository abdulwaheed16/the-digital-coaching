import { z } from "zod";

export const RegisterFormSchema = z.object({
  fullName: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  // termsAndConditions: z.boolean({
  //   message: "Terms and Conditions must be provided",
  // }),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string({ message: "Password is required" }),
});
