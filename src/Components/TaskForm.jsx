import { useState } from 'react';
import Tag from './Tag'; 
const TaskForm=({setTasks}) =>{
  const[taskData , setTaskData]=useState({
    task :"" ,
    status:"todo" ,
    tags : [],
  });

  const checkTags=(tag)=>{
    return taskData.tags.some(item=>item === tag)
  }

  const selectTag=(tag)=>{
    if(taskData.tags.some(item=>item === tag)) {
     const filterTags= taskData.tags.filter(item =>item !== tag)
     setTaskData(prev=>{
      return{...prev , tags:filterTags}
     })
    } else {
      setTaskData(prev=>{
        return{...prev , tags:[...prev.tags, tag]}
      })
    }

  }

  const handleChange =(e)=>{
    const {name , value}= e.target;
     
    setTaskData(prev=>{
      return {...prev,[name]:value}
    })
  };

   const handleSubmit=(e)=>{
        e.preventDefault();
    console.log(taskData);
    setTasks(prev=>{
      return[...prev , taskData];
    });
    setTaskData({
      task :"" ,
      status:"todo" ,
      tags : [],
    });

   };

return (
    <header className='app-header'>
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="task"
            className='task-input' 
            placeholder='Enter your Task'
            value={taskData.task}
            onChange={handleChange}
            />

            <div className='bottom-line'>
                <div>
                <Tag tagName="HTML" selectTag={selectTag} selected = {checkTags("HTML")}/>
                <Tag tagName="CSS"  selectTag={selectTag} selected = {checkTags("CSS")}/>
                <Tag tagName="JavaScript" selectTag={selectTag} selected = {checkTags("JavaScript")}/>
                <Tag tagName="ReactJs" selectTag={selectTag} selected = {checkTags("ReactJs")}/>
                </div>
                 
                 <div>
                <select 
                className="task-status" 
                name="status"
                value={taskData.status}
                onChange={handleChange}>
                 <option value="todo">Todo</option>
                 <option value="doing">Doing</option>
                 <option value="done">Done</option>
                </select>

                <button type='submit'className='task-submit'> + Add Task </button> 
                </div>               
            </div>
        </form>
    </header>
  )
}

export default TaskForm;
 
    