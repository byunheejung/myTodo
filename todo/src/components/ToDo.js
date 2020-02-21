import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({title}) => <div>{title}</div>;

ToDo.propTypes = {
    title: PropTypes.string.isRequired
}

export default ToDo;