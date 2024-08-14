import { getUsers } from "../../controllers/user.js";

const userQueries = {
  getAllUsers: async () => {
    const users = await getUsers();
    return users;
  },
};

export default userQueries;
