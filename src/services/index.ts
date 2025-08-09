import { axiosInstanceWithAuth } from "../api";
import type { ContentFormStateType } from "../recoil/atoms/contentFormAtom";
import type { SignInAtomTypes } from "../recoil/atoms/signInAtom";
import type { SignUpAtomTypes } from "../recoil/atoms/signUpAtom";
import type { ResponseType } from "../types";

const errorHandler = (error: any) => {
  if (error?.response?.data) {
    //this error is due to something other than AccesTokenR error
    return error.response.data;
  }
  //this error is coming form promise.reject(refreshMainData)
  console.log(error);

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
    const data: ResponseType = errorHandler(error);
    throw data;
  }
};

export const uploadContentService = async (
  contentForm: ContentFormStateType
) => {
  try {
    const { data } = await axiosInstanceWithAuth.post("/content/create", {
      title: contentForm.title,
      link: contentForm.link,
      type: contentForm.type,
      tags: contentForm.tags.map((tag) => tag._id),
    });
    return data;
  } catch (error) {
    const data: ResponseType = errorHandler(error);
    throw data;
  }
};

export const getAllContentsService = async () => {
  try {
    const { data } = await axiosInstanceWithAuth.get("/content/getAll");
    return data;
  } catch (error) {
    const data: ResponseType = errorHandler(error);
    throw data;
  }
};

export const deleteContentService = async (contentId: string) => {
  try {
    const { data } = await axiosInstanceWithAuth.delete(
      `/content/delete/${contentId}`
    );
    return data;
  } catch (error) {
    const data: ResponseType = errorHandler(error);
    throw data;
  }
};

export const shareBrainService = async (share: boolean) => {
  try {
    const { data } = await axiosInstanceWithAuth.post("/public/share", {
      share,
    });
    return data;
  } catch (error) {
    const data: ResponseType = errorHandler(error);
    throw data;
  }
};

export const getAllShareBrainContentService = async (shareLink: string) => {
  try {
    const { data } = await axiosInstanceWithAuth.get(`/public/${shareLink}`);
    return data;
  } catch (error) {
    throw errorHandler(error);
  }
};

export const getAllTagsService = async () => {
  try {
    const { data } = await axiosInstanceWithAuth.get("/tag/getAll");
    return data;
  } catch (error) {
    throw errorHandler(error);
  }
};

export const createTagService = async (name: string) => {
  try {
    const { data } = await axiosInstanceWithAuth.post("/tag/create", {
      name,
    });
    return data;
  } catch (error) {
    throw errorHandler(error);
  }
};

export const searchTagsService = async (query: string) => {
  try {
    const { data } = await axiosInstanceWithAuth.get(`/tag/search?q=${query}`);
    return data;
  } catch (error) {
    throw errorHandler(error);
  }
};
