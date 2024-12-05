"use client";

import StepGenerator from "@/components/ui/step-generator/StepGenerator";
import { FormDevStructure } from "../api/get-dev-form";
import { useState } from "react";
import { Button } from "primereact/button";

type Props = {
  form: FormDevStructure;
};

export type FormContent = {
  [key: string]: string | number | boolean;
};

const DevForm: React.FC<Props> = ({ form }) => {
  const [currentStep, setCurrentStep] = useState(4);

  const onSubmit = (data: FormContent) => {
    fetch("http://localhost:8080/form/" + currentStep + 1, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted");
        } else {
          console.log("Form not submitted");
        }
      })
      .catch((error) => {
        console.error("Error submitting form", error);
      });
  };

  return (
    <div>
      <h1>Dev Form</h1>
      <StepGenerator
        key={currentStep}
        step={form.data[currentStep]}
        onSubmit={onSubmit}
      ></StepGenerator>
      <Button
        label="Next"
        className="w-full mb-3"
        onClick={() => setCurrentStep(currentStep + 1)}
      ></Button>
      <Button
        label="Previous"
        className="w-full mb-3"
        onClick={() => setCurrentStep(currentStep - 1)}
      ></Button>
    </div>
  );
};

export default DevForm;
