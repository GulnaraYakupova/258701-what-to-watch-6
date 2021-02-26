import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const TabContent = ({render}) => {
  return (
    <Fragment>
      {render()}
    </Fragment>
  );
};

TabContent.propTypes = {
  render: PropTypes.func.isRequired
};

export default TabContent;
