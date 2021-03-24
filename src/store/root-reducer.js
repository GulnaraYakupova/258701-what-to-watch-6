import {combineReducers} from 'redux';

import {appLogic} from './app-logic/app-logic';
import {filmsData} from './films-data/films-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.APP]: appLogic,
  [NameSpace.USER]: user,
});


