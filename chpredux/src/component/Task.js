import React, { useState } from 'react'
import { TransitioGroup, CSSTransition } from 'react-transition-group';
const Task = (toggleTask, task, completed, id, removeTask, updateTask) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTask(id, editTask);
        setEditTask(false);
    };
    return (
        <TransitioGroup className={completed ? "task compled" : "task"}>
            {isEditing ? (
                <CSSTransition key="editing" timeout={500} classNames="dive">
                    <div className='task-edit-dive' onSubmit={handleUpdate}>
                        <input type="text"
                            name="task" value={editTask}
                            onChange={(e) => setEditTask(e.target.value)} />
                        <button>save</button>

                    </div>
                </CSSTransition>
            ) : (
                <CSSTransition key="normal" timeout={500} classNames="task-text">
                    <li className='task-task' onClick={toggleTask}>
                        {task}
                    </li>
                </CSSTransition>
            )}
            <div className='Task-button'>
                <button onClick={() => setIsEditing(true)}>
                    <i className='fas fa-trash' />
                </button>
                <button onClick={removeTask}>
                    <i className='fas fa-trash' />
                </button>
            </div>

        </TransitioGroup>


    )
}

export default Task