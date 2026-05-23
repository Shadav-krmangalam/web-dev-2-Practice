import { useState } from "react";
import Child1 from "./Components/Child1";

function App(){
  const name="alex"
  // let age = 20
  // let count = 0

  const [count,setCount] = useState(0)

  // count -> state variable
  //setCount -> updator/modifier function 
  //useState ->hook
  //0-> initial value of state variable

function handleIncrement(){
  
  setCount(count+1)
  // count=count+1;
  // console.log(count)
   
}

function handleDecrement(){
  setCount(count-1)
  //   count=count-1;
  // console.log(count)
}

function handleReset(){
  setCount(0)
  //   count=0;
  // console.log(count)
}

// let flag = false

// if(flag===true){
//   return (
//     <h1>Flag True hai </h1>
//   )
// }else{
//   return (
//     <>
//     <Child1 count={count} name={name}/>
//     <button onClick={handleIncrement}>Increment</button>
//     <button onClick={handleDecrement}>Decrement</button>
//     <button onClick={handleReset}>Reset</button>
   
//     </>
//   )
// {condition ? true :false} -> ?: Ternary Operator

return (
    <>
    {/* <Child1 count={count} name={name}/> */}
    <h1>Count : {count}</h1>
    <button onClick={handleIncrement}>Increment</button>

    {/* {count>1 ? <button onClick={handleDecrement}>Decrement</button> :<span>All ready kam hai</span>} */}
    <button onClick={handleDecrement}>Decrement</button>
    
    <button onClick={handleReset}>Reset</button>
   
    </>

)

}
  

  
  



export default App;