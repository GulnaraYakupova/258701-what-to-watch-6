import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const FilmCard = ({name, image, onCardEnter, onCardLeave, id}) => {
  return (
    <article
      onMouseEnter={onCardEnter}
      onMouseLeave={onCardLeave}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img src={image} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onCardEnter: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
};

export default FilmCard;
