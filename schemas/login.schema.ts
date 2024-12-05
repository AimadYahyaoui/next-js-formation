import { zod } from "@/lib/zod-i18n";
import { z } from "zod";
const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod
    .string()
    .min(6)
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/),
});

export default loginSchema;

export type LoginSchema = z.infer<typeof loginSchema>;
