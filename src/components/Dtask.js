import React from 'react'

function Dtask(props) {
  



  return (
    <div className='btncontainer'>
        
        
         <button onClick={props.togleevent} value={props.id} id='tog'>Toggle</button>
         <button onClick={props.deleteevent} value={props.id} id='del'>Delete</button>
         <button onClick={props.edittask} value={props.id} id='edit'>Edit</button>
    </div>
  )
}

export default Dtask