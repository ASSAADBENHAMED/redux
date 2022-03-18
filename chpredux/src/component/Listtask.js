import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Addtask from './Addtask';
import Task from './Task';
import {CSSTransition,TransitionGpoup} from 'react-transition-group';
import {useSelector,useDispatch } from 'react-redux';
import {completedTask,addTask,removeTask ,updateTask} from '../redux/action';
const Listtask = () => {
    const state=useSelector((state)=>({...state.tasks}));
    let dispatch=useDispatch();
    const create=(newTask)=>{
        dispatch(addTask(newTask));
    };
    const update =(id,updateTask) =>{
        dispatch(updateTask({id,updateTask}));
    }
  return (
    <div className='tasklist'>
   <h1>task with react redux</h1>
 <Addtask createTask={create} />
 <transitionGpoup className="task=list">
     {state.tasks&&
     state.tasks.map((task)=>{
        return(
            <CSSTransition key={task.id} className="task">
              <Task  
              key={task.id }
              id={task.id}
              task={task.task}
              completed={task.completed}
              toggleTask={()=>dispatch(completedTask(task))}
              removeTask={()=>dispatch(removeTask(task))} 
              updateTask={update}/>
            </CSSTransition>
        );
     })}
     </transitionGpoup>

    </div>
  )
}

export default Listtask