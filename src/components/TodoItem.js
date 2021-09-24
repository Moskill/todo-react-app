import React, { useState } from 'react';
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaCheckSquare } from "@react-icons/all-files/fa/FaCheckSquare";
import './TodoList.css'

function TodoItem(props) {

    const [marker, setMarker] = useState('alert alert-primary');

    const markTodo = () => {
        marker === 'alert alert-primary lineTrough' ? setMarker('alert alert-primary') : setMarker('alert alert-primary lineTrough')
    }

    return (
        <div className={marker} id={'todo-'+props.todoId}>
            <FaTrashAlt className="float-end mx-1" onClick={props.delTodo} size={27}/>
            <FaEdit className="float-end " size={30} onClick={props.editTodo}/>
            <FaCheckSquare className="float-end  mx-1" size={30} onClick={markTodo}/>
            <p className={'class-'+props.todoId}>{props.todoName}</p>
        </div>
    );
}

export default TodoItem;