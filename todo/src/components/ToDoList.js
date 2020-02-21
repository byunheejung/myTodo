import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

const ToDoList = ({toDoList}) => (
    <div>
        {toDoList.map((toDo,index) => (
            <ToDo key={index} {...toDo} />
        ))}
    </div>
);

ToDoList.propTypes = {
    toDoList: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default ToDoList;