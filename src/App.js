import './App.css';
import TaskColoumn from './Components/TaskColoumn';
import TaskForm from './Components/TaskForm';
import TodoImg from './images/direct-hit.png';
import DoingImg from'./images/glowing-star.png';
import DoneIcon from './images/done-mark.png';
import { useState , useEffect } from 'react';


const oldTasks=localStorage.getItem("tasks")
console.log(oldTasks);

const App=()=> {
  const [tasks , setTasks]=useState(JSON.parse(oldTasks)||[]);
  const [activeCard , setActiveCard]= useState(null)

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  } ,[tasks])

  const handleDelete =(taskIndex)=>{
  const newTasks=tasks.filter((task , index)=>index !== taskIndex)
   setTasks(newTasks);
  };

  const onDrop=(status ,position)=>{
    console.log(`${activeCard}is going to place into ${status}and at the position ${position}`);

    if(activeCard ==null|| activeCard === undefined)
      return;

    const taskToMove = tasks[activeCard];
    const updatedTasks= tasks.filter((task ,index)=> index !== activeCard)

     updatedTasks.splice(position , 0 , {
       ...taskToMove,
       status: status
     })

     setTasks(updatedTasks);

  };

 


  return (
   <div className='app'>
   <TaskForm setTasks={setTasks}/>
        <main className='app-main'>
            <TaskColoumn 
            title='To Do' 
            icon={TodoImg} 
            tasks={tasks} 
            status="todo"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
            /> 

            <TaskColoumn 
            title='Doing'
            icon= {DoingImg} 
            tasks={tasks} 
            status="doing"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
            /> 

            <TaskColoumn 
            title='Done'
            icon={DoneIcon} 
            tasks={tasks} 
            status="done"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
            />
        </main>
      
    </div> 
    
  );
}

export default App;
