import { useState } from "react";

function App(){
  const [formData,setFormdata] = useState({
    name:"",
    age:"",
    gender:"male",
    language:[]
  })

  function handleChange(e){
    let {name,value,checked} = e.target

    if(name==="name"){
      setFormdata((prev)=>({
        ...prev,
        [name]:value   
      }))
      return;
    }

    if(name==="age"){
      setFormdata((prev)=>({
        ...prev,
        [name]:value   
      }))
      return;

    }

    if(name==="gender"){
      setFormdata((prev)=>({
        ...prev,
        [name]:value   
      }))
      return;
    }


    if(checked){
      setFormdata((prev)=>({
        ...prev,
        [name]:[...prev[name],value]  //hindi,english
      }))
      return;
    }else{
      setFormdata((prev)=>({
        ...prev,
       [name]:prev[name].filter((item)=>item!==value)
      }))
    }
// name:user jo type krega

  }


  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)

  }
  return (

    <>

    <form action="" style={{display:"flex",flexDirection:"column",width:"300px",gap:"10px"}} onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} id="" placeholder="Name" onChange={handleChange}/>

      <input type="number" name="age" value={formData.age} id="" placeholder="Age" onChange={handleChange}/>

     Gender : <select name="gender" id="" value={formData.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>

     Hindi : <input type="checkbox" name="language" value={"hindi"} id="" onChange={handleChange} />
     English : <input type="checkbox" name="language" value={"english"} id="" onChange={handleChange}/>
     <button type="submit">Submit</button>
    </form>


    <div>
      <h1>Name : {formData.name}</h1>
      <p>Age : {formData.age}</p>
      <span>Gender : {formData.gender}</span>
      <p>Language: {formData.language[0]},{formData.language[1]}</p>
    </div>



    
    </>
  )

}

export default App;