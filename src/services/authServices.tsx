import { LoginForm, RegisterForm } from "@/types/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { registerUser } from "actions/auth";

// regiser user service -------------------------------------------------------------
export const registerUserService = (user: RegisterForm) => {
  const query = useQuery({
    queryKey: ["regiserUser"],
    queryFn: async () => {
      registerUser(user);
    },
  });

  const { data, isError, isPending, isSuccess } = query;
  console.log("Register user: ", data);
  return {
    result: data,
    isError,
    isPending,
    isSuccess,
  };
};

// login user service ----------------------------------------------------------------
export const loginUserService = (user: LoginForm) => {};
