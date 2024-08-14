import _ from "lodash";
import { createUser } from "../../controllers/user.js";

const userMutation = {
  addUser: async (root, args, ctxt, info) => {
    try {
      const input = _.get(args, "input");

      const newUser = await createUser(input);
      return {
        isSuccess: true,
        data: newUser,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error,
      };
    }
  },
};

export default userMutation;
