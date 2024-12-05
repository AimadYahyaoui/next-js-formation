"use client";

import { Step } from "@/features/dev/api/get-dev-form";
import { FormContent } from "@/features/dev/components/dev-form";
import { zodGenerator } from "@/lib/zod-generator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  step: Step;
  onSubmit: (data: FormContent) => void;
};

const StepGenerator: React.FC<Props> = ({ step, onSubmit }) => {
  const schema = zodGenerator(step.inputs);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <h1>Step Generator</h1>
      <form>
        {step.inputs.map((input, index) => {
          return (
            <div key={index}>
              <label
                htmlFor={input.name}
                className="block text-900 font-medium mb-2"
              >
                {input.name}
              </label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                className="w-full mb-3"
                {...register(input.name)}
              />
            </div>
          );
        })}
        {errors &&
          Object.keys(errors).map((key, index) => {
            return (
              <span key={index}>{errors[key] && errors[key].message}</span>
            );
          })}
        <Button
          label="Submit"
          className="w-full mb-3"
          onClick={() => {
            handleSubmit(onSubmit);
          }}
        ></Button>
      </form>
    </div>
  );
};

export default StepGenerator;
