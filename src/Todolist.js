import React from 'react'
import { useState } from 'react'
import "./list.css"
import Taskinp from './components/Taskinp'
import Dtask from './components/Dtask'





function Todolist() {

 
  let [text,uptext]=useState("")
    let [task,uptask]=useState([])
  



    function handlechange(e){
      let inp = e.target.value
     
    uptext(inp)
  }

    function handletask(text){
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


        console.log(togglearry)
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


         <div >
               <Dtask  togleevent={togleevent} deleteevent={deleteevent} id={props.id} edittask={edittask}  />

         </div>
         
      
          </div>
        )  
      }
      
      


  return (
    <div>
          
          <div className="list">


            {/* <h1>TO DO LIST</h1>
           
            <input type="text" name="" id="inpdata" value={text} onChange={handlechange} placeholder='Enter the task' />
            <button onClick={handletask} className='submit'>Add to list</button> */}
          <Taskinp  handletask={handletask} handlechange={handlechange} tdata={text}/>

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