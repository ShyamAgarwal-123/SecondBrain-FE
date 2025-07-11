import { useRecoilState } from "recoil";
import type { ChangeEvent } from "react";
import { signInAtom, type SignInAtomTypes } from "../recoil/atoms/signInAtom";

const useSignIn = () => {
  const [signIn, setSignIn] = useRecoilState<SignInAtomTypes>(signInAtom);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { placeholder, value } = e.target;
    setSignIn((prev) => ({
      ...prev,
      [placeholder.toLowerCase()]: value,
    }));
  }

  return { signIn, setSignIn, onChange };
};

export default useSignIn;
