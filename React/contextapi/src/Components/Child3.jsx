import React, { useContext } from 'react'
import { MyStore } from './MyStore'

function Child3() {
    let {name,age} = useContext(MyStore)
  return (
    <div>Child3
        <h1>{name}</h1>
        <span>{age}</span>
    </div>
  )
}

export default Child3