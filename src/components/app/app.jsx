import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

const App = ({promoMovie}) => (<MainPage promoMovie={promoMovie} />);

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }),
};

export default App;

