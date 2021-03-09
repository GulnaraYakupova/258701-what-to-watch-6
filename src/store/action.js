export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  SHOW_MORE: `films/showMore`,
  RESET_SHOWN_CARDS: `films/resetShowMore`,
  LOAD_FILMS: `data/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_PROMO: `data/promoMovie`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
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
  })
};

export const resetShowMore = () => (dispatch) => (dispatch(ActionCreator.resetShowMore()));
