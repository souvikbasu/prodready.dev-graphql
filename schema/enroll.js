import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Enroll {
    email: String
    date: String
    tz: String
  }
`;

export default typeDefs;
