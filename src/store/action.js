export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  SHOW_MORE: `films/showMore`,
  RESET_SHOWN_CARDS: `films/resetShowMore`
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
  })
};
