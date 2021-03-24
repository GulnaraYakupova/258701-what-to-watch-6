import React, {useEffect} from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import SingIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import NotFound from "../404/404";
import {connect} from 'react-redux';
import {fetchFilmsList, fetchPromoMovie} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {getDataLoadedStatus, getFilms} from "../../store/films-data/selectors";

const App = ({filmsData, isDataLoaded, onLoadData}) => {
  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const getFilm = (id) => filmsData.find((i) => i.id === Number(id));
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/login" exact render={() => <SingIn />} />
        <PrivateRoute
          path="/mylist"
          exact
          render={() => <MyList films={filmsData} />}
        />
        <Route
          path="/films/:id"
          exact
          render={(props) => {
            const film = getFilm(props.match.params.id);
            return film ? <Film filmData={film} similarList={filmsData.filter((item) => film.genre === item.genre && film !== item).slice(0, 4)} /> : <NotFound />;
          }}
        />
        <PrivateRoute
          path="/films/:id/review"
          exact
          render={(props) => {
            const film = getFilm(props.match.params.id);
            return film ? (
              <AddReview title={film.name} image={film.posterImage} />
            ) : (
              <NotFound />
            );
          }}
        />
        <Route
          path="/player/:id"
          exact
          render={(props) => {
            const film = getFilm(props.match.params.id);

            return film ? (
              <Player
                poster={film.previewImage}
                src={film.videoLink}
                title={film.name}
              />
            ) : (
              <NotFound />
            );
          }}
        />
        <Route
          path="/login"
          exact
          render={() => (
            <SingIn />
          )}
        >
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  filmsData: getFilms(state),
  isDataLoaded: getDataLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchPromoMovie());
    dispatch(fetchFilmsList());
  }
});

App.propTypes = {
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  filmsData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string,
        videoLink: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scoresCount: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string).isRequired,
        runTime: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
      }).isRequired
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({id: PropTypes.string.isRequired}),
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
