import { LoginFormSchema, RegisterFormSchema } from "@/lib/formSchema";
import { z } from "zod";

export type RegisterForm = z.infer<typeof RegisterFormSchema>;
export type LoginForm = z.infer<typeof LoginFormSchema>;
