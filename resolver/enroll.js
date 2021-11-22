import { Enroll } from "../models.js";

const enrollResolver = {
  Query: {
    enrollCount(_) {
      return Enroll.count({});
    },
  },
  Mutation: {
    async saveUserSpot(parent, args, context, info) {
      const { email } = args;
      const enrollObj = new Enroll({
        email,
      });
      try {
        const result = await enrollObj.save();
        return { ...result._doc };
      } catch (err) {
        console.error(err);
      }
    },
  },
};

export default enrollResolver;
