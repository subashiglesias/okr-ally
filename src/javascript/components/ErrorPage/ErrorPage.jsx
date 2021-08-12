import React from 'react';
import PropTypes from 'prop-types';
import ServerError from './ServerError';

const SERVER_ERROR = '500';

const ErrorPage = ({ title, type }) => {
  let renderedComponent = null;
  switch (type) { //Render different types of error depending on the error type (e.g: 401 auth error)
    case SERVER_ERROR: {
      renderedComponent = <ServerError title={title} />;
      break;
    }
    default:
      renderedComponent = null;
  }

  return renderedComponent;
};

ErrorPage.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

export default ErrorPage;
