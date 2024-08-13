import db from "../../prisma/client.js";

const exerciseQueries = {
  getAllExercises: async () => {
    const exercises = await db.exercise.findMany({});
    return exercises;
  },
};

export default exerciseQueries;
