export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  SHOW_MORE: `films/showMore`,
  RESET_SHOWN_CARDS: `films/resetShowMore`,
  LOAD_FILMS: `data/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_PROMO: `data/promoMovie`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  LOAD_MOVIE: `data/movie`,
  LOAD_COMMENT: `data/comment`,
  RESET_COMMENTS: `data/resetComments`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  showMore: () => ({
    type: ActionType.SHOW_MORE,
  }),
  resetShowMore: () => ({
    type: ActionType.RESET_SHOWN_CARDS,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (promoMovie) => ({
    type: ActionType.LOAD_PROMO,
    payload: promoMovie,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  loadMovie: (movie) => ({
    type: ActionType.LOAD_MOVIE,
    payload: movie
  }),
  loadComment: (comments) => ({
    type: ActionType.LOAD_COMMENT,
    payload: comments
  }),
  resetComments: () => ({
    type: ActionType.RESET_COMMENTS,
  })
};

export const resetShowMore = () => (dispatch) => (dispatch(ActionCreator.resetShowMore()));
export const resetComments = () => (dispatch) => dispatch(ActionCreator.resetComments());
