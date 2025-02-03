import React from 'react'
import Tag from './Tag'
import DltIcon from '../images/delete.png';

const TaskCard=({title , tags , handleDelete , index , setActiveCard})=> {
  return (
    <article className='task-card' draggable onDragStart={()=>setActiveCard(index)}onDragEnd={()=>setActiveCard(null)}>
        <p className='task-text'>{title}</p>

        <div className='bottom-line'>
            <div className='tag-2'>
            {
              tags.map((tag, index)=> <Tag key={index} tagName={tag} selected={true}/>) 
            }
            </div>
            <div className='dlt-task'onClick={()=>handleDelete(index)}>
                <img src={DltIcon} className='dlt-icon'alt="" />
            </div>

        </div>
    </article>
  )
}

export default TaskCard
