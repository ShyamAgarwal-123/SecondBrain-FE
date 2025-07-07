import { useRecoilState } from "recoil";
import type { ChangeEvent } from "react";
import { signUpAtom, type SignUpAtomTypes } from "../recoil/atoms/signUpAtom";

const useSignUp = () => {
  const [signUp, setSignUp] = useRecoilState<SignUpAtomTypes>(signUpAtom);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { placeholder, value } = e.target;
    setSignUp((prev) => ({
      ...prev,
      [placeholder.toLowerCase()]: value,
    }));
  }

  return { signUp, setSignUp, onChange };
};

export default useSignUp;
