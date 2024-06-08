import _ from "lodash";
import db from "../prisma/client.js";

export const resolvers = {
  Query: {
    getAllUsers: async () => {
      const allUsers = await db.user.findMany();
      return allUsers;
    },
  },
  Mutation: {},
  User: {
    id: ({ id }) => id,
    email: ({ email }) => email,
    name: ({ name }) => name,
    username: ({ username }) => username,
    logo: ({ logo }) => logo,
    is_deleted: ({ is_deleted }) => is_deleted,
    deleted_by: ({ deleted_by }) => (deleted_by ? deleted_by : null),
    created_at: ({ created_at }) => created_at,
    created_by: ({ created_by }) => (created_by ? created_by : null),
    updated_at: ({ updated_at }) => updated_at,
    updated_by: ({ updated_by }) => (updated_by ? updated_by : null),
    metadata: ({ metadata }) => metadata,
  },
};
