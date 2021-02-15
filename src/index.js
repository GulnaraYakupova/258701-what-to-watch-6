import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/App";

const data = {
  promoMovie: {
    title: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    release: 2015,
  },
};

ReactDom.render(<App promoMovie={data.promoMovie} />, document.getElementById(`root`));
