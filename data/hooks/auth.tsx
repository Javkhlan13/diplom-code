import { useMutation } from "@apollo/client";
import mutations from "../graphql/auth/mutations";
export const useLogin = (onCompleted?: () => void) => {
  const [loginMutation, { loading }] = useMutation(mutations.login, {
    onCompleted: (data) => {
      if (onCompleted) {
        onCompleted();
      }
      const token = data?.login?.token;
    },
  });

  return { loginMutation, loading };
};
