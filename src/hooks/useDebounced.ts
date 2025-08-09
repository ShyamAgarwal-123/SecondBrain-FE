import { useEffect, useState } from "react";

const useDebounce = ({
  value,
  millisecond = 1000,
}: {
  value: string;
  millisecond: number;
}) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, millisecond);
    return () => clearTimeout(timer);
  }, [value, millisecond]);

  return { debouncedValue, setDebouncedValue };
};

export default useDebounce;
