import axios from "axios";
import useSignUp from "../../hooks/useSignUp";
import useUser from "../../hooks/useUser";
import { signUpDefault } from "../../recoil/atoms/signUpAtom";
import Button from "../ui/Button";
import Input from "../ui/Input";

const CreateSignUpModal = () => {
  const { signUp, onChange, setSignUp } = useSignUp();
  const { user } = useUser();

  const onSubmit = async () => {
    try {
      console.log(signUp);

      const data = await axios.post(
        "http://localhost:3030/api/v1/user/signup",
        signUp
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!user.authenticated && (
        <div className="w-screen h-screen fixed top-0 left-0 opacity-50 bg-slate-500 flex justify-center items-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white rounded p-4 flex flex-col items-center">
              <div>Signup</div>
              <div className="flex flex-col">
                <Input
                  placeholder="Username"
                  onChange={onChange}
                  value={signUp.username}
                />
                <Input
                  placeholder="Email"
                  onChange={onChange}
                  value={signUp.email}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={onChange}
                  value={signUp.password}
                />
              </div>
              <div>
                <Button
                  variant="primary"
                  onClick={onSubmit}
                  size="md"
                  className="cursor-pointer"
                >
                  Signup
                </Button>
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateSignUpModal;
