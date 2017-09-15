import React from 'react';
import PropTypes from 'prop-types';

export default function Place(props) {
  return <section className="place">{props.name}</section>;
}

Place.propTypes = {
  name: PropTypes.string.isRequired,
};
