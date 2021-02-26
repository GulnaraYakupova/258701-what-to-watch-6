import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";

const FilmCard = ({name, image, onCardEnter, onCardLeave, id, src, isPlaying}) => {
  return (
    <article
      onMouseEnter={onCardEnter}
      onMouseLeave={onCardLeave}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        {/* <img src={image} alt={name} width="280" height="175" /> */}
        <VideoPlayer poster={image} width="280" height="175" src={src} isPlaying={isPlaying} />
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
  id: PropTypes.number.isRequired,
  onCardEnter: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default FilmCard;
