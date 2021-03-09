import React, {useState} from "react";
import PropTypes from "prop-types";
import Details from "../details/details";
import Overview from "../overview/overview";
import Reviews from "../reviews/reviews";
import {v4} from "uuid";
import TabContent from "../tab-content/tab-content";

const Tabs = ({
  rating,
  scoresCount,
  description,
  director,
  starring,
  runTime,
  genre,
  released,
  filmId,
}) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabsContent = [
    {
      id: 1,
      name: `Overview`,
      component: (
        <Overview
          rating={rating}
          scoresCount={scoresCount}
          description={description}
          director={director}
          starring={starring}
        />
      ),
    },
    {
      id: 2,
      name: `Details`,
      component: (
        <Details
          director={director}
          starring={starring}
          runTime={runTime}
          genre={genre}
          released={released}
        />
      ),
    },
    {
      id: 3,
      name: `Reviews`,
      component: <Reviews filmId={filmId} />,
    },
  ];

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabsContent.map(({name, id}) => (
            <li
              key={v4()}
              style={{marginRight: `40px`}}
              className={`movie-nav__item> ${
                activeTab === id && `movie-nav__item--active`
              }`}
              onClick={() => setActiveTab(id)}
            >
              <span className="movie-nav__link">{name}</span>
            </li>
          ))}
        </ul>
      </nav>
      <TabContent render={() => tabsContent.find(({id}) => id === activeTab).component} />
    </div>
  );
};

Tabs.propTypes = {
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  filmId: PropTypes.string.isRequired,
};

export default Tabs;
