import React, {useState} from "react";
import FilmCard from "../film-card/film-card";
import PropTypes from "prop-types";
import {v4} from "uuid";

const FilmsList = ({films}) => {
  const [, setActive] = useState(null);

  return (
    <div className="catalog__movies-list">
      {films.map(({name, previewImage, id}) => (
        <FilmCard
          key={v4()}
          name={name}
          image={previewImage}
          id={id}
          onCardEnter={() => setActive(id)}
          onCardLeave={() => setActive(null)}
        />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
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
    starring: PropTypes.arrayOf(PropTypes.string.isRequired),
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired).isRequired
};

export default FilmsList;
