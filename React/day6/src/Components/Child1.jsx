import Child2 from "./Child2";

function Child1({name}){
    return (
        <>
        <h1>Hello Child 1</h1>
        <Child2 name={name}/>
        
        </>
    )
}

export default Child1;