import {ActionType} from '../action';
import {genresMap} from "../../utils/utils";

const initialState = {
  genre: genresMap.all,
  shownCount: 8,
};

const appLogic = (state = initialState, action) => {
  switch (action.type) {
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
  }

  return state;
};

export {appLogic};
