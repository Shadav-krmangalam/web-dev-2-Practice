import { useState } from "react";
import Child1 from "./Components/Child1";
import { MyStore } from "./Components/MyStore";
function App(){
  const [name,setName] = useState("Alex")
  const [age,setAge] = useState(20)
  return (
    <MyStore.Provider value={{name,age}}>


          <Child1/>

    </MyStore.Provider>
  )
}

export default App;