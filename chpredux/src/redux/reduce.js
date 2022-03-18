 import * as types from"./actiontypes";
import { v4 as uuidv4 } from "uuid";
import { updateTask } from "../action";
 const initialState ={
     task:[{id:1,task:"welcome",compled:false}],
 };
 const taskReduce= (state =initialState,action)=>{
     switch (action.type){
           case types.ADD_TASK:
               const newTask={
                   id:uuidv4(),
                  task:action.payload,
                  compled:false
               };
             const addedtasks=[...state.task,newTask];
             return{
                 ...state,
                 tasks:addedtasks,
             } ;  
        case types.REMOVE_TASK:
        const filterTask=state.tasks.filter((t)=>t.id!==action.payload.id);
        return{
            ...state,
            tasks:filterTask,
        };
        case types.UPDATE_Tasks=state.tasks.map((task)=>{
            if(task.id===action.payload.id){

                return{ ...task,task:action.payload.updatedTask  };
            }
            return task;
        }):
           return{
               ...state,
               tasks: updateTask,
           };
       
         case  types.COMPLETE_TASK:
             const toggleTask=state.tasks.map((t)=>t.id===action.payload.id
              ?{...action.payload,complete: !action.payload.compled}:t);
           return{
               ...state,
               tasks:toggleTask,
           };
          default:
            return state; 
     }
 };
 export default taskReduce