import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { Input, formatMs } from '@material-ui/core';

let AddToDo = ({dispatch}) => {
    let input
    
    return (
        <form onSubmit={
            e=>{
                e.preventDefault();
                if(!input.value.trim()){
                    return;
                }
                dispatch(addTodo(input.value));
                input.value= '';
            }
        }>
             <input type="text" placeholder="할일을입력해라이놈아!!" ref={node => (input = node)}/>
             <button type="submit">add to-do</button>
        </form>
    )
}

AddToDo = connect()(AddToDo);

export default AddToDo;