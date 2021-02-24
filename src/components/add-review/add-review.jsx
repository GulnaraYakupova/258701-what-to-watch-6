import React, {useState} from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import {Link} from "react-router-dom";

const AddReview = ({title, image}) => {
  const [message, setMessage] = useState(null);
  const [rating, setRating] = useState(null);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={image} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">
                  {title}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={image} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {new Array(10).fill(``).map((item, index) => {
                const value = Number(index + 1);
                return (
                  <React.Fragment key={v4()}>
                    <input
                      className="rating__input"
                      id={`star-${value}`}
                      type="radio"
                      name="rating"
                      value={value}
                      checked={rating === value ? true : false}
                      onChange={(evt) => setRating(Number(evt.target.value))}
                    />
                    <label
                      className="rating__label"
                      htmlFor={`star-${value}`}
                    >
                      {`Rating ${value}`}
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              onChange={(evt) => setMessage(evt.target.value)}
            >{message}</textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AddReview;
