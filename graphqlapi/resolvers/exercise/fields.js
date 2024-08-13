const exerciseFileds = {
  Exercise: {
    id: ({ id }) => id,
    name: ({ name }) => name,
    targetMuscles: ({ target_muscles }) => JSON.parse(target_muscles),
    type: ({ type }) => type,
    images: ({ image_url }) => JSON.parse(image_url),
    videos: ({ video_url }) => JSON.parse(video_url),
  },
};

export default exerciseFileds;
