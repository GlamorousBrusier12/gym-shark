import db from "../prisma/client.js";

export const getAllUsers = async (data) => {
  return await db.user.findMany();
};

export const insertUser = async (data) => {
  const { email, username, password } = data;

  return await db.user.create({
    data: {
      email,
      username,
      password,
    },
  });
};
