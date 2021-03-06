import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)));
};

export const fetchPromoMovie = () => (dispatch, _getState, api) => {
  return api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromo(data)));
};

export const fetchMovie = (id) => (dispatch, _getState, api) => {
  return api.get(`/films/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadMovie(data)));
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  return api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComment(data)));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

