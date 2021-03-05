export const serverFilmsDataToProject = (data) => ({
  id: data.id,
  name: data.name,
  posterImage: data.poster_image,
  previewImage: data.preview_image,
  backgroundImage: data.background_image,
  backgroundColor: data.background_color,
  videoLink: data.video_link,
  previewVideoLink: data.preview_video_link,
  description: data.description,
  rating: data.rating,
  scoresCount: data.scores_count,
  director: data.director,
  starring: data.starring,
  runTime: data.run_time,
  genre: data.genre,
  released: data.released,
  isFavorite: data.is_favorite
});

export const projectFilmsDataToServer = (data) => ({
  id: data.id,
  name: data.name,
  [`poster_image`]: data.posterImage,
  [`preview_image`]: data.previewImage,
  [`background_image`]: data.backgroundImage,
  [`background_color`]: data.backgroundColor,
  [`video_link`]: data.videoLink,
  [`preview_video_link`]: data.previewVideoLink,
  description: data.description,
  rating: data.rating,
  [`scores_count`]: data.scoresCount,
  director: data.director,
  starring: data.starring,
  [`run_time`]: data.runTime,
  genre: data.genre,
  released: data.released,
  [`is_favorite`]: data.isFavorite
});
