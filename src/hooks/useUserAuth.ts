import { useEffect, useState } from "react";
import { getUserService } from "../services";
import type { ResponseType } from "../types";
import useUser from "./useUser";
import { defaultUser } from "../recoil/atoms/userAtom";

export interface IGetUser extends ResponseType {
  data: {
    username: string;
    email: string;
  };
}

const useUserAuth = () => {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  async function checkAuthUser() {
    setLoading(true);
    const data: IGetUser = await getUserService();
    console.log(data);

    if (data?.success) {
      setUser((prev) => {
        return {
          email: data?.data.email,
          username: data?.data?.username,
          authenticated: true,
        };
      });
    } else setUser(defaultUser);
    setLoading(false);
  }

  useEffect(() => {
    checkAuthUser();
  }, []);

  return { user, loading };
};

export default useUserAuth;
