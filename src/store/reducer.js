import {ActionType} from "./action";
import {genresMap} from "../utils/utils";
import {AuthorizationStatus} from '../const';
import {serverFilmsDataToProject} from '../utils/converter';

const initialState = {
  genre: genresMap.all,
  films: [],
  filmsToShow: [],
  shownCount: 8,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  promoMovie: {},
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

    case ActionType.SHOW_MORE:
      return {
        ...state,
        shownCount: state.shownCount + 8
      };
    case ActionType.RESET_SHOWN_CARDS:
      return {
        ...state,
        shownCount: 8,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOAD_FILMS:
      const films = action.payload.map((item) => serverFilmsDataToProject(item));
      return {
        ...state,
        films,
        filmsToShow: films,
        isDataLoaded: true
      };
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoMovie: serverFilmsDataToProject(action.payload),
      };
  }

  return state;
};

export {reducer};
