import { useRecoilState } from "recoil";

import { signInAtom, type SignInAtomTypes } from "../recoil/atoms/signInAtom";
import type { InputProps } from "../components/ui/Input";
import type { ChangeEvent } from "react";

const useSignIn = () => {
  const [signIn, setSignIn] = useRecoilState<SignInAtomTypes>(signInAtom);

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { placeholder, value } = e.target;
    setSignIn((prev) => ({
      ...prev,
      [placeholder.toLowerCase()]: value,
    }));
  }

  return { signIn, setSignIn, onChange };
};

export default useSignIn;
