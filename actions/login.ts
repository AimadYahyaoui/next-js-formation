import { action } from "@/lib/safe-action";
import loginSchema from "@/schemas/login.schema";

export const login = action
  .schema(loginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    console.log(email, password);
    return true;
  });
