import { BaseMutationOptions, useMutation } from "@apollo/client";
import mutations from "../graphql/auth/mutations";
import { onError } from "@/lib/utils";
export const useRegister = (
  onCompleted?: BaseMutationOptions["onCompleted"]
) => {
  const [registerMutation, { loading }] = useMutation(mutations.register, {
    onCompleted: (data) => {
      !!onCompleted && onCompleted(data);
    },
    onError,
  });

  return { registerMutation, loading };
};
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
export const useSendEmail = (onCompleted?: () => void) => {
  const [sendEmail, { loading }] = useMutation(mutations.sendEmail, {
    onCompleted: (data) => {
      if (onCompleted) {
        onCompleted();
      }
    },
    onError,
  });

  return { sendEmail, loading };
};
export const useResetPassword = (onCompleted?: () => void) => {
  const [resetPassword, { loading }] = useMutation(mutations.resetPassword, {
    onCompleted: (data) => {
      if (onCompleted) {
        onCompleted();
      }
    },
    onError,
  });

  return { resetPassword, loading };
};
