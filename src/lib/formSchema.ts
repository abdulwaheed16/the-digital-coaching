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

export const ContactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
});
