import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SingIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import NotFound from "../404/404";

const App = ({promoMovie, filmsData}) => {
  const getFilm = (id) => filmsData.find((i) => i.id === Number(id));

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage promoMovie={promoMovie} films={filmsData} />
        </Route>
        <Route path="/login" exact render={() => <SingIn />} />
        <Route
          path="/mylist"
          exact
          render={() => <MyList films={filmsData} />}
        />
        <Route
          path="/films/:id"
          exact
          render={(props) => {
            const film = getFilm(props.match.params.id);
            return film ? <Film filmData={film} similarList={filmsData.slice(0, 4)} /> : <NotFound />;
          }}
        />
        <Route
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }),
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

export default App;
