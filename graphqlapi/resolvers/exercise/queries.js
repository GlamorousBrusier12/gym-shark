import { getAllExercises } from "../../controllers/exercise.js";

const exerciseQueries = {
  getAllExercises: async () => {
    const exercises = await getAllExercises();
    return exercises;
  },
};

export default exerciseQueries;
