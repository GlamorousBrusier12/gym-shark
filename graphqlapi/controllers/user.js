import { getAllUsers, insertUser } from "../models/user.js";

export const createUser = async (data) => {
  return await insertUser(data);
};

export const getUsers = async (data) => {
  return await getAllUsers(data);
};
