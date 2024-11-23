import { gql } from "@apollo/client";
const register = gql`
  mutation Register(
    $name: String!
    $email: String!
    $phone: Int!
    $password: String!
    $gender: Gender!
  ) {
    register(
      name: $name
      email: $email
      phone: $phone
      password: $password
      gender: $gender
    ) {
      token
      user {
        id
        name
      }
    }
  }
`;
const login = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        role
      }
    }
  }
`;
const sendEmail = gql`
  mutation SendEmail($email: String!) {
    requestPasswordReset(email: $email)
  }
`;
const resetPassword = gql`
  mutation ResetPassword($token: String!, $newPassword: String!) {
    resetPassword(token: $token, newPassword: $newPassword)
  }
`;
const mutations = {register, login,sendEmail,resetPassword };
export default mutations;
