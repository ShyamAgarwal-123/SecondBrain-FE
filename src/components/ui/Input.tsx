import { memo, type ChangeEvent } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({ placeholder, onChange, value }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="px-4 py-2 border rounded m-2"
      value={value}
    />
  );
};

function areEqaul(prevProps: InputProps, newProps: InputProps) {
  return prevProps.value === newProps.value;
}

export default memo(Input, areEqaul);
// export default Input;
