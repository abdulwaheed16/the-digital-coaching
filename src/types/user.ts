import { NewsLetterSchema } from "@/lib/zodSchemas";
import { z } from "zod";

// newsletter
export type NewsLetter = z.infer<typeof NewsLetterSchema>;
