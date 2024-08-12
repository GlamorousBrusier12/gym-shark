import _ from "lodash";
import fs from "fs";
import exercises1 from "./exercise.json" assert { type: "json" };
import path from "path";
import axios from "axios";

let exercises = exercises1.slice(700, 734);

console.log(exercises.length);

const getExerciseDetails = async (name, num) => {
  let result = await axios.request({
    url: `https://musclewiki.com/newapi/exercise/exercises/?slug=${name}`,
    headers: {
      accept: "*/*",
      "accept-language": "en-us",
      "django-language": "en-us",
      priority: "u=1, i",
      "sec-ch-ua": '"Chromium";v="127", "Not)A;Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        "_sharedid=12922ed8-d801-4578-a933-689c9e8db52f; _sharedid_cst=zix7LPQsHA%3D%3D",
      Referer: `https://musclewiki.com/dumbbells/male/biceps/${name}`,
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "User-agent": "your bot 0.1",
    },
    body: null,
    method: "GET",
  });

  let exercise = result.data.results[0];

  console.log(`${num}: completed for ${name}`);

  let aaa = {
    name: exercise.name,
    targetMuscles: exercise.muscles.map((muscle) => muscle.name),
    type: exercise.category.name,
    images: exercise.images.map((image) => image.og_image),
    videos: exercise.images.map((image) => image.branded_video),
  };
  console.log(aaa.name);

  return aaa;
};

// manipulating the exercises
let updatedList = [];
updatedList = _.map(exercises, async (exercise, index) => {
  return getExerciseDetails(
    _.last(exercise.target_url.male.split("/")),
    index + 1
  );
});

let result = await Promise.all(updatedList);
console.log(result.length);
// let result = updatedList;

console.log(result[0]);

const filePath = path.join("./scripts", "updatedExercise.json");

fs.appendFile(filePath, JSON.stringify(result), (error) => {
  if (error) {
    return console.log("error", error.message);
  }
  console.log("data updated and writeen sucessfully");
});
