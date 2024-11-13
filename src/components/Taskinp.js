import React from 'react'
import { useState } from 'react'

function Taskinp(props) {


    function btnclicked(){
        props.handletask(props.tdata)
        // uptext("")
       
    }


  

 
  return (
    <div>
        
           <h1>TO DO LIST</h1>
            {/* {console.log(task)} */}
            <input type="text" name="" id="inpdata" value={props.tdata} onChange={props.handlechange} placeholder='Enter the task' />
            <button onClick={btnclicked} className='submit'>Add to list</button>
    </div>
  )
}

export default Taskinp