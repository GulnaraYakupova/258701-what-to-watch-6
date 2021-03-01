import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/App";
import {filmsData} from "./mocks/films.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    reducer,
    composeWithDevTools());

const data = {
  promoMovie: {
    title: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    release: 2015,
  },
};

ReactDom.render(
    <Provider store={store}>
      <App promoMovie={data.promoMovie} filmsData={filmsData} />
    </Provider>,
    document.getElementById(`root`)
);
