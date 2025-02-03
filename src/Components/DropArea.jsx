import React, { useState } from 'react'

const DropArea = ({onDrop}) => {
    const [showDrop, setshowDrop] = useState(false)
  return (
    <section 
    onDragEnter={()=> setshowDrop(true)} 
    onDragLeave={()=>setshowDrop(false)} 
    onDrop={()=>{
        onDrop(); 
        setshowDrop(false);
    }}
      onDragOver={e => e.preventDefault()}


    className={showDrop ? "drop-area" : "hide-drop"}
    >Drop Here</section> 
  )
}

export default DropArea;
 