import React from 'react'
import { useState } from 'react'
import "./list.css"





function Todolist() {


    let [text,uptext]=useState("")
    let [task,uptask]=useState([])
  
    function handlechange(e){
      let inp = e.target.value
       
      uptext(inp)

    
    }

    function handletask(){
        // console.log(text)
     
        let data={
            work:text,
            status:false,
            id: Date.now()*Math.random()

        }
  

        uptask([...task,data])

        uptext("")


    }

    function togleevent(e){

       let btnval= e.target.value
        
        let togglearry= task.map((el)=>{


            return btnval==el.id? {...el,status:!el.status} :el

        })

        uptask(togglearry)
    }



    function deleteevent(e){
        let delval= e.target.value

        let delitem= task.filter((el)=>{
            return delval!=el.id
        })

        uptask(delitem)
    }



    function edittask(e){
    
    let edval=e.target.value

    // console.log(edval)
      task.map((el)=>{
        return el.id==edval?uptext(el.work):el
      })
   
      let ediarr=task.filter((el)=>{
        return edval!=el.id
    })
    uptask(ediarr)
    // console.log(edarr)
    

    
     
    }

    function List(props) {
        return (
          <div className='taskscontainer'>
         
         <h1>{props.event} task is {props.status} </h1>


         <div className='btncontainer'>

         <button onClick={togleevent} value={props.id} id='tog'>Toggle</button>
         <button onClick={deleteevent} value={props.id} id='del'>Delete</button>
         <button onClick={edittask} value={props.id} id='edit'>Edit</button>

         </div>
         
      
          </div>
        )  
      }
      
      


  return (
    <div>
          
          <div className="list">


            <h1>TO DO LIST</h1>
            {/* {console.log(task)} */}
            <input type="text" name="" id="inpdata" value={text} onChange={handlechange} placeholder='Enter the task' />
            <button onClick={handletask} className='submit'>Add to list</button>
        <div className='tasks'>
        {task.map((el)=>{
             return   <List event={el.work} key={el.id} id={el.id} status={el.status ? "complete":"incomplete" }/>

           })}
        </div>
          


          </div>
          
    </div>
  )
}

export default Todolist