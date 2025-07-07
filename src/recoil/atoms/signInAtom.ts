import { atom, RecoilState } from "recoil";
import type { IUserAtom } from "./userAtom";

export type SignInAtomTypes = Pick<IUserAtom, "username" | "email"> & {
  password: string;
};

export const signInDefault: SignInAtomTypes = {
  username: "",
  email: "",
  password: "",
};

export const signInAtom: RecoilState<SignInAtomTypes> = atom<SignInAtomTypes>({
  key: "signInAtom",
  default: signInDefault,
});
