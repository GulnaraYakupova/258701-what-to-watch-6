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

const App = ({promoMovie}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MainPage promoMovie={promoMovie} />
      </Route>
      <Route path="/login" exact render={() => <SingIn />} />
      <Route path="/mylist" exact render={() => <MyList />} />
      <Route path="/films/:id" exact render={() => <Film />} />
      <Route path="/films/:id/review" exact render={() => <AddReview />} />
      <Route path="/player/:id" exact render={() => <Player />} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }),
};

export default App;
