import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getFilmsToShow = (state) => state[NameSpace.DATA].filmsToShow;
export const getDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getPromoMovie = (state) => state[NameSpace.DATA].promoMovie;
export const getCurrentMovie = (state) => state[NameSpace.Data].currentMovie;
export const getCurrnetComments = (state) => state[NameSpace.DATA].currentComments;
export const getCommentLoadedStatus = (state) => state[NameSpace.DATA].isCommentsLoaded;
export const getGenre = (state) => state[NameSpace.DATA].genre;
