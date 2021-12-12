import { ApolloError } from "apollo-server-core";
import { Enroll } from "../models.js";

const enrollResolver = {
  Query: {
    enrollCount(_) {
      return Enroll.count({});
    },
  },
  Mutation: {
    async saveUserSpot(parent, args, context, info) {
      const { email, date, tz } = args;
      const enrollObj = new Enroll({
        email,
        date,
        tz,
      });
      try {
        const result = await enrollObj.save();
        return { ...result._doc };
      } catch (err) {
        return new ApolloError(
          "Looks like you have already enrolled. I will keep you posted. Thanks for joining"
        );
        console.error(err);
      }
    },
  },
};

export default enrollResolver;
