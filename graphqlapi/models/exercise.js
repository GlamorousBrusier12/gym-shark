import db from "../prisma/client.js";

export const getExercises = async (data) => {
  return await db.exercise.findMany({});
};
