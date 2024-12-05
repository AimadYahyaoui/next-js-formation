import {
  InputText as InputTextPrime,
  InputTextProps,
} from "primereact/inputtext";

type InputProps = InputTextProps & React.RefAttributes<HTMLInputElement>;

const InputText = ({ ...props }: InputProps) => {
  return <InputTextPrime {...props}></InputTextPrime>;
};

export default InputText;
