import React, {useState} from "react";
import {v4} from "uuid";

const ReviewForm = () => {
  const [message, setMessage] = useState(null);
  const [rating, setRating] = useState(null);
  return (
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
                <label className="rating__label" htmlFor={`star-${value}`}>
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
        >
          {message}
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
