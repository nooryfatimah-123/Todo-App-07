import React from 'react'
import TaskCard from './TaskCard';
import DropArea from './DropArea';

const TaskColoumn=({
  title , 
  icon , 
  tasks , 
  status , 
  handleDelete , 
  setActiveCard,
  onDrop,
})=> {
  return (
    <section className='task-coloumn'>
        <h2 className='task-heading'>
            <img className='todo-icon' src={icon} alt=''></img>{title}</h2>
  
            <DropArea onDrop={()=>onDrop(status ,0)}/>

            {tasks.map(
                (task, index)=>task.status === status && (
              <React.Fragment key={index} >
              <TaskCard
              title={task.task} 
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
              setActiveCard={setActiveCard}
              />
              <DropArea onDrop={()=>onDrop(status ,index+1)}/>
              </React.Fragment>
                )
           ) }
    </section>
  )
}
 
export default TaskColoumn;
