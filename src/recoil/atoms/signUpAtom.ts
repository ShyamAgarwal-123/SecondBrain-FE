import { atom } from "recoil";
import type { IUserAtom } from "./userAtom";

export type SignUpAtomTypes = Pick<IUserAtom, "email" | "username"> & {
  password: string;
};

export const signUpDefault: SignUpAtomTypes = {
  email: "",
  username: "",
  password: "",
};

export const signUpAtom = atom<SignUpAtomTypes>({
  key: "signUpAtom",
  default: signUpDefault,
});
