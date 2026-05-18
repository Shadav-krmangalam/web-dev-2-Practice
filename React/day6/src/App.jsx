// function App(){
//   const name = "Alex"
//   return(
//       <h1>Hello {name}</h1>
//   )


// }

// export default App;

import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";

function App(){
  const name = "Alex"
  return (

    <>

      <Child1 name={name}/>
   
    </>

  )
}

export default App;