import React, { useState } from 'react';
import TodoItem from './TodoItem'
import { FaPlusSquare } from "@react-icons/all-files/fa/FaPlusSquare";

function TodoList(props) {
    const [todo, setTodo] = useState([]);

    const genetrateIndex = () => {
        return todo.length;
    }
    const addTodo = (e) => {
        e.preventDefault();
        const inputBox = document.getElementById('inputBox');
        setTodo([...todo, {
            id: genetrateIndex(),
            name: inputBox.value,
            marked: false,
            edit: false,
            deleted: false
        }]);
        inputBox.value = '';
    }

    const delTodo = (index) => {
        const todoToDel = document.getElementById('todo-' + index.id);
        todoToDel.remove();
    }

    const editTodo = (index) => {
        console.log(index.id);
        const toEdit =  document.getElementById('todo-' + index.id)
        const editInput = document.createElement('input');
        const editBtn = document.createElement('button');
        const todoNameP = document.querySelector('.class-'+index.id)
        editBtn.innerText = 'Edit';
        toEdit.append(editInput);
        toEdit.append(editBtn);
        editInput.value = index.name;
        editBtn.onclick = (e) => {setTodo([...todo, todo[index.id].name = editInput.value])};
        todoNameP.remove();
        console.log(editBtn);
    }


    return(
        <>
        <div className="todo-wrapper">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Our ToDo List</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Developed by Salah &amp; Chris</h6>
                    <button className="btn btn-primary my-1" id="clearStorage">Clear Storage</button>
                    <button className="btn btn-primary my-1 mx-1" id="getCached">Get cached</button>
                    
                    {/* Input-Group */}
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Input a Task" id="inputBox"/>
                        <div className="input-group-append">
                            <form id="addTodo" onSubmit={addTodo}>
                                <button  onClick={addTodo} className="btn btn-success" type="button" id="btn_add"><FaPlusSquare size={20}/></button>
                            </form>
                        </div>
                    </div>
                    {/* Todo-List */}
                    <div className="card-body px-0" id="task-list">
                        {console.log(todo, 'Z. 66 TodoItem.js')}
                        {todo.map((i) => {
                            return <TodoItem 
                                todoId={i.id} 
                                todoName={i.name} 
                                todoMarked={i.marked} 
                                todoEdit={i.edit} 
                                todoDeleted={i.deleted} 
                                delTodo={() => delTodo(i)}
                                editTodo={() => editTodo(i)}
                            />
                        })}
                       
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default TodoList;
