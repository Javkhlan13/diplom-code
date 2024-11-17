import { gql } from "@apollo/client";
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
const mutations = { login };
export default mutations;
