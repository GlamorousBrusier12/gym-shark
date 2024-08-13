import db from "../../prisma/client.js";

const userQueries = {
  getAllUsers: () => {
    return db.user.findMany();
  },
};

export default userQueries;
