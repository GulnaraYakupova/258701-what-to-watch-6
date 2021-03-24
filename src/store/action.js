export const ActionType = {
  CHANGE_GENRE: `app/changeGenre`,
  SHOW_MORE: `app/showMore`,
  RESET_SHOWN_CARDS: `films/resetShowMore`,
  LOAD_FILMS: `data/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_PROMO: `data/promoMovie`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  LOAD_MOVIE: `data/movie`,
  LOAD_COMMENT: `data/comment`,
  RESET_COMMENTS: `data/resetComments`
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const showMore = () => ({
  type: ActionType.SHOW_MORE,
});

export const resetShowMoreAct = () => ({
  type: ActionType.RESET_SHOWN_CARDS,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadPromo = (promoMovie) => ({
  type: ActionType.LOAD_PROMO,
  payload: promoMovie,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const loadMovie = (movie) => ({
  type: ActionType.LOAD_MOVIE,
  payload: movie
});

export const loadComment = (comments) => ({
  type: ActionType.LOAD_COMMENT,
  payload: comments
});

export const resetCommentsAct = () => ({
  type: ActionType.RESET_COMMENTS,
});

export const resetShowMore = () => (dispatch) => (dispatch(resetShowMore()));
export const resetComments = () => (dispatch) => dispatch(resetComments());
