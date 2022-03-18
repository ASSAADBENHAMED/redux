import React ,{useState} from 'react'

const Addtask = (createTask) => {
    const [task,setTask]=useState("");
    const handleSubmit=(e) =>{
        e.preventDefaut();
        createTask(task); 
        setTask("")
    };
  return (
    <div className='taskadd' onSubmit={handleSubmit}>
      <input type="text" placeholder="enter task" id="task" 
      name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button>add task</button>
       
    </div>
  )
}

export default Addtask