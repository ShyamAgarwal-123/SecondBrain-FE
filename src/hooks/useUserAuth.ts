import { useState } from "react";
import { getUserService } from "../services";
import type { ResponseType } from "../types";
import useUser from "./useUser";
import { defaultUser } from "../recoil/atoms/userAtom";
import { useContentFormState } from "./useContentForm";
import { defaultContentForm } from "../recoil/atoms/contentFormAtom";
import { useAllContentState } from "./useAllContent";
import { defaultAllContent } from "../recoil/atoms/allContentAtom";

export interface IGetUser extends ResponseType {
  data: {
    username: string;
    email: string;
  };
}

const useUserAuth = () => {
  const { user, setUser } = useUser();
  const { contentForm, setContentForm } = useContentFormState();
  const { allContent, setAllContent } = useAllContentState();
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  async function fetchUser() {
    if (loading || fetched) return;
    try {
      setLoading(true);
      const data: IGetUser = await getUserService();
      if (data?.success) {
        setUser({
          email: data?.data.email,
          username: data?.data?.username,
          authenticated: true,
        });
      } else setUser(defaultUser);
      setFetched(true);
      setLoading(false);
    } catch (data: any) {
      if (data?.success) {
        fetchUser();
      } else if (!data?.success && data?.message === "Refresh Token Required") {
        if (user.authenticated) {
          setUser(defaultUser);
        }
        if (contentForm.open) {
          setContentForm(defaultContentForm);
        }
        if (allContent.contents.length) {
          setAllContent(defaultAllContent);
        }
      }
      console.log(data);
      setLoading(false);
    }
  }

  return { user, loading, fetchUser };
};

export default useUserAuth;
