import { memo, type ChangeEvent } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  textarea?: boolean;
  className?: string;
}

const Input = ({
  placeholder,
  onChange,
  value,
  textarea = false,
  className = "",
  ...rest
}: InputProps) => {
  if (textarea) {
    return (
      <textarea
        placeholder={placeholder}
        onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
        className={`px-4 py-2 border rounded m-2${className}`}
        value={value}
        {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input
      placeholder={placeholder}
      onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
      className={`px-4 py-2 border rounded m-2 ${className}`}
      value={value}
      {...rest}
    />
  );
};

function areEqual(prevProps: InputProps, newProps: InputProps) {
  return prevProps.value === newProps.value;
}

export default memo(Input, areEqual);
// export default Input;
