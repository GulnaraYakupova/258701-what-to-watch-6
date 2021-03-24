import {ActionType} from "../action";
import {serverFilmsDataToProject} from "../../utils/converter";
import {genresMap} from "../../utils/utils";

const initialState = {
  films: [],
  filmsToShow: [],
  isDataLoaded: false,
  promoMovie: {},
  currentMovie: {},
  currentComments: [],
  isCommentsLoaded: false,
  genre: genresMap.all,
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      if (action.payload === genresMap.all) {
        return {
          ...state,
          genre: action.payload,
          filmsToShow: state.films,
        };
      }
      return {
        ...state,
        genre: action.payload,
        filmsToShow: state.films.filter((film) => film.genre === action.payload),
      };
    case ActionType.LOAD_FILMS:
      const films = action.payload.map((item) =>
        serverFilmsDataToProject(item)
      );
      return {
        ...state,
        films,
        filmsToShow: films,
        isDataLoaded: true,
      };
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoMovie: serverFilmsDataToProject(action.payload),
      };
    case ActionType.LOAD_MOVIE:
      return {
        ...state,
        currentMovie: serverFilmsDataToProject(action.payload),
      };
    case ActionType.LOAD_COMMENT:
      return {
        ...state,
        currentComments: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.RESET_COMMENTS:
      return {
        ...state,
        currentComments: [],
        isCommentsLoaded: false,
      };
  }

  return state;
};

export {filmsData};
