import { type Input } from "@/features/dev/api/get-dev-form";
import { z } from "zod";

export const zodGenerator = (akData: Input[]) => {
  const cleanFields = akData;

  const listFields = cleanFields
    .map((input) => {
      const field = input;
      switch (field.type) {
        case "select":
          return {
            [field.name]: z.string(),
          };
        case "number":
          return {
            [field.name]: z.coerce.number(),
          };
        case "checkbox":
          return {
            [field.name]: z.boolean(),
          };
        case "text":
          return {
            [field.name]: z.string(),
          };
        case "email":
          return {
            [field.name]: z.string().email(),
          };
        default:
          return null;
      }
    })
    .filter((field) => field !== null)
    // @ts-expect-error - I know this is not the best way to do this, but I'm not sure how to fix it
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});
  console.log(listFields);
  return z.object(listFields);
};
