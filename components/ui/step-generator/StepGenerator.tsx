"use client";

import { MaintInput, Step } from "@/features/dev/api/get-dev-form";
import { FormContent } from "@/features/dev/components/dev-form";
import { zodGenerator } from "@/lib/zod-generator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { useForm, UseFormRegister } from "react-hook-form";
import { z } from "zod";
import getAllFieldsFormReccursiveStructure from "./get-all-fields";

type Props = {
  step: Step;
  onSubmit: (data: FormContent) => void;
};

const InputText = ({
  input,
  register,
}: {
  input: MaintInput;
  register: UseFormRegister<{
    [x: string]: string | number | boolean;
  }>;
}) => {
  return (
    <>
      <label htmlFor={input.name} className="block text-900 font-medium mb-2">
        {input.name}
      </label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        className="w-full mb-3"
        {...register(input.name)}
      />
    </>
  );
};

const StepGenerator: React.FC<Props> = ({ step, onSubmit }) => {
  const demo = getAllFieldsFormReccursiveStructure(step.inputs);
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
              <InputText input={input} register={register} />
              {input.hasDependantsFields && input.dependantsFields && (
                <>
                  {input.dependantsFields.map((dependantField1, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: getValues(input.name) ? "block" : "none",
                        }}
                      >
                        <InputText
                          input={dependantField1}
                          register={register}
                        />
                        {dependantField1.hasDependantsFields &&
                          dependantField1.dependantsFields && (
                            <>
                              {dependantField1.dependantsFields.map(
                                (dependantField2, index) => {
                                  return (
                                    <div
                                      key={index}
                                      style={{
                                        display: getValues(dependantField1.name)
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <InputText
                                        input={dependantField2}
                                        register={register}
                                      />
                                      {dependantField2.hasDependantsFields &&
                                        dependantField2.dependantsFields && (
                                          <>
                                            {dependantField2.dependantsFields.map(
                                              (dependantField3, index) => {
                                                return (
                                                  <div key={index}>
                                                    <InputText
                                                      input={dependantField3}
                                                      register={register}
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
