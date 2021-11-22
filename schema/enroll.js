import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Enroll {
    email: String
  }
`;

export default typeDefs;
