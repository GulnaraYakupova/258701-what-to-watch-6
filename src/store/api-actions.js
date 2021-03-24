import {loadFilms, loadPromo, loadMovie, loadComment, requireAuthorization, redirectToRoute} from './action';
import {AuthorizationStatus} from '../const';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data)));
};

export const fetchPromoMovie = () => (dispatch, _getState, api) => {
  return api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromo(data)));
};

export const fetchMovie = (id) => (dispatch, _getState, api) => {
  return api.get(`/films/${id}`)
    .then(({data}) => dispatch(loadMovie(data)));
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  return api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadComment(data)));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

