export type Input = {
  type: string;
  name: string;
  defaultValue: string;
  placeholder: string;
  validation: {
    required: boolean;
    minLength?: number;
    maxLength?: number;
    message: string;
    messageMin?: string;
    messageMax?: string;
    messagePattern?: string;
  };
};

export type MaintInput = Input & {
  hasDependantsFields?: true;
  dependantsFields?: MaintInput[];
};

export type Step = {
  name: string;
  inputs: MaintInput[];
};

export type FormDevStructure = {
  data: Step[];
};

export const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const getFormDevStructure = async (): Promise<FormDevStructure> => {
  await waitFor(1000);
  const response = await fetch("http://localhost:3000/api/form");

  return response.json();
};
