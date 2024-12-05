"use client";

import { Step } from "@/features/dev/api/get-dev-form";
import { FormContent } from "@/features/dev/components/dev-form";
import { zodGenerator } from "@/lib/zod-generator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import getAllFieldsFormReccursiveStructure from "./get-all-fields";

type Props = {
  step: Step;
  onSubmit: (data: FormContent) => void;
};

const StepGenerator: React.FC<Props> = ({ step, onSubmit }) => {
  const demo = getAllFieldsFormReccursiveStructure(step.inputs);
  console.log(demo);
  const schema = zodGenerator(demo);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const formValues = watch();

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
              {input.hasDependantsFields && input.dependantsFields && (
                <>
                  {input.dependantsFields.map((dependantField, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: getValues(input.name) ? "block" : "none",
                        }}
                      >
                        <label
                          htmlFor={dependantField.name}
                          className="block text-900 font-medium mb-2"
                        >
                          {dependantField.name}
                        </label>
                        <input
                          type={dependantField.type}
                          placeholder={dependantField.placeholder}
                          className="w-full mb-3"
                          {...register(dependantField.name)}
                        />
                        {dependantField.hasDependantsFields &&
                          dependantField.dependantsFields && (
                            <>
                              {dependantField.dependantsFields.map(
                                (dependantField, index) => {
                                  return (
                                    <div
                                      key={index}
                                      style={{
                                        display: getValues(input.name)
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <label
                                        htmlFor={dependantField.name}
                                        className="block text-900 font-medium mb-2"
                                      >
                                        {dependantField.name}
                                      </label>
                                      <input
                                        type={dependantField.type}
                                        placeholder={dependantField.placeholder}
                                        className="w-full mb-3"
                                        {...register(dependantField.name)}
                                      />
                                      {dependantField.hasDependantsFields &&
                                        dependantField.dependantsFields && (
                                          <>
                                            {dependantField.dependantsFields.map(
                                              (dependantField, index) => {
                                                return (
                                                  <div key={index}>
                                                    <label
                                                      htmlFor={
                                                        dependantField.name
                                                      }
                                                      className="block text-900 font-medium mb-2"
                                                    >
                                                      {dependantField.name}
                                                    </label>
                                                    <input
                                                      type={dependantField.type}
                                                      placeholder={
                                                        dependantField.placeholder
                                                      }
                                                      className="w-full mb-3"
                                                      {...register(
                                                        dependantField.name
                                                      )}
                                                    />
                                                  </div>
                                                );
                                              }
                                            )}
                                          </>
                                        )}
                                    </div>
                                  );
                                }
                              )}
                            </>
                          )}
                      </div>
                    );
                  })}
                </>
              )}
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
