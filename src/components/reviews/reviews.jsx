import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {fetchComments} from "../../store/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';
import PropTypes from 'prop-types';
import {v4} from "uuid";
import {resetComments} from '../../store/action';

const Reviews = ({filmId, comments, isCommentsLoaded, onLoadComments, onUnmount}) => {

  useEffect(() => {
    if (!isCommentsLoaded) {
      onLoadComments(filmId);
    }
  }, [isCommentsLoaded]);

  useEffect(() => {
    return () => {
      onUnmount();
    };
  }, [filmId]);

  if (!isCommentsLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <div className="movie-card__reviews movie-card__row" style={{display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`}}>
      {
        comments.map(({user, rating, comment, date}) => (
          <div className="review" key={v4()} style={{width: `48%`}}>
            <blockquote className="review__quote">
              <p className="review__text">
                {comment}
              </p>

              <footer className="review__details">
                <cite className="review__author">{user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">
                  {date}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{rating}</div>
          </div>))
      }
    </div>
  );
};


const mapStateToProps = (state) => ({
  isCommentsLoaded: state.isCommentsLoaded,
  comments: state.currentComments,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComments(filmId) {
    dispatch(fetchComments(filmId));
  },
  onUnmount() {
    dispatch(resetComments());
  }
});

Reviews.propTypes = {
  onLoadComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  filmId: PropTypes.number.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  onUnmount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
