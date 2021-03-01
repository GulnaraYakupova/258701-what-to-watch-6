import {ActionType} from "./action";
import {filmsData as films} from "../mocks/films";
import {genresMap} from "../utils/utils";

const initialState = {
  genre: genresMap.all,
  films,
  filmsToShow: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      if (action.payload === genresMap.all) {
        return {
          ...state,
          genre: action.payload,
          filmsToShow: films,
        };
      }
      return {
        ...state,
        genre: action.payload,
        filmsToShow: films.filter((film) => film.genre === action.payload),
      };
  }

  return state;
};

export {reducer};
