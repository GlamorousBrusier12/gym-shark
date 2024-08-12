import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// import prisma from "../client";
import exercises from "../../scripts/updatedExercise.json" assert { type: "json" };
import _ from "lodash";
async function main() {
  const payload = _.map(
    exercises,
    ({ name, targetMuscles, type, videos, images }) => {
      return {
        name,
        target_muscles: targetMuscles,
        type,
        video_url: videos,
        image_url: images,
      };
    }
  );
  const exercisesResult = await prisma.exercise.createMany({
    data: payload,
  });

  console.log(
    `completed seeding the database.... ${exercises.length} rows inserted`
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
