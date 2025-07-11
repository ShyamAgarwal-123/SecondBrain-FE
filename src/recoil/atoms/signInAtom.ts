import { atom, type RecoilState } from "recoil";
import type { IUserAtom } from "./userAtom";

export type SignInAtomTypes = Pick<IUserAtom, "email"> & {
  password: string;
};

export const signInDefault: SignInAtomTypes = {
  email: "",
  password: "",
};

export const signInAtom: RecoilState<SignInAtomTypes> = atom<SignInAtomTypes>({
  key: "signInAtom",
  default: signInDefault,
});
