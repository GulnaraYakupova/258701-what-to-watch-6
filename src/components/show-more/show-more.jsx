import React from "react";
import {ActionCreator} from "../../store/action";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const ShowMore = ({onShowMoreClick}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreClick}>
        Show more
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(ActionCreator.showMore());
  }
});

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ShowMore);
