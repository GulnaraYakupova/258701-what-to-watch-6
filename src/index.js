import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/App";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from './store/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './api/api';
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";
import {redirect} from './store/middlewares/redirect';


const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
