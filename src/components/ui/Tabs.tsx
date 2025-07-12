import Button from "./Button";
import CreateSignUpModal from "../modal/CreateSignUpModal";
import CreateSignInModal from "../modal/CreateSignInModal";
import { useState } from "react";
import useUserAuth from "../../hooks/useUserAuth";

const Tabs = () => {
  const [signUpTab, setSignUpTab] = useState(true);
  const { user, loading } = useUserAuth();

  return (
    !user.authenticated &&
    !loading && (
      <div className="w-screen h-screen fixed top-0 left-0 opacity-60 bg-slate-500 flex justify-center items-center">
        <div className="bg-blue-200 p-4 flex flex-col gap-2 rounded-2xl items-center">
          <div className="flex flex-row gap-3 p-3">
            <Button
              size="md"
              variant="secondary"
              onClick={() => setSignUpTab(true)}
              className={`cursor-pointer ${
                signUpTab === true && "border-4"
              } transition-all rounded-xl`}
            >
              SignUp
            </Button>
            <Button
              size="md"
              variant="secondary"
              onClick={() => setSignUpTab(false)}
              className={`cursor-pointer ${
                signUpTab === false && "border-4"
              } transition-all rounded-xl`}
            >
              SignIn
            </Button>
          </div>
          <div>{signUpTab ? <CreateSignUpModal /> : <CreateSignInModal />}</div>
        </div>
      </div>
    )
  );
};

export default Tabs;
