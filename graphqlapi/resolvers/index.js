import _ from "lodash";
import {
  exerciseFields,
  exerciseQueries,
  exerciseMutations,
} from "./exercise/index.js";
import { userFields, userQueries, userMutations } from "./user/index.js";
export const resolvers = {
  Query: {
    ...exerciseQueries,
    ...userQueries,
  },

  Mutation: {
    ...exerciseMutations,
    ...userMutations,
  },

  ...exerciseFields,
  ...userFields,
};
