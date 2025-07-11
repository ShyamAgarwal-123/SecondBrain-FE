import { axiosInstanceWithAuth } from "../api";
import type { SignInAtomTypes } from "../recoil/atoms/signInAtom";
import type { SignUpAtomTypes } from "../recoil/atoms/signUpAtom";

const errorHandler = (error: any) => {
  if (error?.response?.data) {
    return error.response.data;
  }
  return error;
};

export const refreshAccessTokenService = async () => {
  try {
    const { data } = await axiosInstanceWithAuth.get(
      "/user/refreshAccessToken"
    );
    return data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const signUpService = async (signUpdata: SignUpAtomTypes) => {
  try {
    const { data } = await axiosInstanceWithAuth.post(
      "/user/signup",
      signUpdata
    );
    return data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const signInService = async (signInData: SignInAtomTypes) => {
  try {
    const { data } = await axiosInstanceWithAuth.post(
      "/user/signin",
      signInData
    );
    return data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const getUserService = async () => {
  try {
    const { data } = await axiosInstanceWithAuth.get("/user/getuser");
    return data;
  } catch (error: any) {
    const data = errorHandler(error);
    return data;
  }
};
