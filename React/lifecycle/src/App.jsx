import { useEffect, useState } from "react";
import axios from "axios"

function App(){
  // const [count,setCount] = useState(0)
  // const [name,setName] = useState("Alex")
  // const [task,setTask] = useState("Pending")

  // function handleIncrement(){
  //   setCount(count+1)
  // }

  // function handleNameChange(){
  //   setName("Joy")
  // }
 

  // function handleTaskChange(){
  //   setTask("Done")
  // }

  // useEffect(()=>{
  //   console.log("Hello Mounting")

  // },[count,task])

  const [user,setUser] = useState([]);

  async function fetchAPI(){
    try{
      // let res = await fetch("https://jsonplaceholder.typicode.com/users")
      // let data = await res.json();
      // console.log(data)

      let res = await axios.get("https://jsonplaceholder.typicode.com/users")
     setUser(res.data)

    }catch(err){
      alert(err)
    }
  }

  useEffect(()=>{
    fetchAPI()

  },[])

  return (
    <>
    {/* <h1>Count:{count}</h1>
    <button onClick={handleIncrement}>Increment</button>

    <h1>Name:{name}</h1>
    <button onClick={handleNameChange}>Name Change</button>

    <h1>Task : {task}</h1>
    <button onClick={handleTaskChange}>Task Change</button> */}

    {user.map((item)=>{
      return (
        
        <div>

          <h1>{item.username}</h1>
          <p>{item.email}</p>

        
        </div>
      )

    })}
  
    </>
  )

}

export default App;