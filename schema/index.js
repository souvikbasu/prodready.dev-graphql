import Enroll from "./enroll.js";

const QueryAndMutation = `
    type Query {
        enrollCount: Int
    }
    type Mutation {
        saveUserSpot(email: String): Enroll
    }
`;

const schemas = [QueryAndMutation, Enroll];

export default schemas;
