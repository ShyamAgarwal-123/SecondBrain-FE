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
    hash: string;
  };
}

const useUserAuth = () => {
  const { user, setUser } = useUser();
  const { contentForm, setContentForm } = useContentFormState();
  const { allContent, setAllContent } = useAllContentState();
  const [fetched, setFetched] = useState(false);

  async function fetchUser() {
    if (user.loading || fetched) return;
    try {
      setUser((prev) => ({ ...prev, loading: true }));
      const data: IGetUser = await getUserService();
      if (data?.success) {
        setUser({
          email: data?.data.email,
          username: data?.data?.username,
          authenticated: true,
          hash: data?.data?.hash,
          loading: false,
        });
        setFetched(true);
      } else {
        setUser(defaultUser);
        setFetched(false);
      }
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
    } finally {
      // setLoading(false);
      setUser((prev) => ({ ...prev, loading: false }));
    }
  }

  return { user, fetchUser };
};

export default useUserAuth;
