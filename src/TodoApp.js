import React, { useState } from 'react'


const TodoApp=() =>{


    const [todos,setTodos]=useState("")
    const[name,setName]=useState([])

    const handleChange=(e)=>{
      setTodos(e.target.value)
    }

    const handleSubmit=()=>{
        setName((oldName)=>{
          return  [...oldName,todos]
        
        })
        setTodos("")
    }

    
   
    return(
        
      
        <div  className="Todostyle">  
            <div> <h1 className="Todostyle1">Arshad Khan</h1></div>
           
         <br/>
         <input id="inputstyle" type="text" value={todos} placeholder="Enter Your Name..." onChange={handleChange}/>
         <button id="btnstyle" type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        
          {name.map((newName)=>{
           return<li>{newName}
           

          </li>}
          
        
           
          
          )}
          </div> 
    )
}

export default TodoApp;