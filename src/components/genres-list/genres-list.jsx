import React from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import {connect} from 'react-redux';
import {changeGenre} from '../../store/action';
import {genresMap} from "../../utils/utils";
import {getGenre} from "../../store/films-data/selectors";

const GenresList = ({genres, activeGenre, onGenreChange}) => {
  genres.unshift(genresMap.all);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={v4()} className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={() => onGenreChange(genre)}>
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(newGenre) {
    dispatch(changeGenre(newGenre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
