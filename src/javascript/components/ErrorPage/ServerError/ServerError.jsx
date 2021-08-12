import React from 'react';
import PropTypes from 'prop-types';
import './ServerError.css';

const ServerError = ({ title }) => {
  return (
    <div className="error server-error">
      <h2 className="title">{title}</h2>
      <div className="page-content">
        <h2>WE'RE HAVING TROUBLE LOADING THIS PAGE</h2>
        <p className="line1">These issues are usually temporary. Please try again soon.</p>
      </div>
    </div>
  );
};

ServerError.propTypes = {
  title: PropTypes.string,
};

export default ServerError;
