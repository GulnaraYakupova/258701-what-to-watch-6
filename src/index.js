import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/App";
import {filmsData} from "./mocks/films.js";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './api/api';
import {ActionCreator} from "./store/action";
import {AuthorizationStatus} from "./const";
import {checkAuth} from './store/api-actions';


const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
