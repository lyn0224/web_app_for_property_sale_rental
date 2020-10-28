import React, { Children, Component, useContext } from 'react'
import Grid from '../../components/Grid_card'
import {Context} from "../../context/SaveHomeContext"

function SaveHome(prop) {
  const {name} = useContext(Context)
  console.log(name);
  
  const items = [
    {
      id: 1,  
      name: "first",
      description: "this is my first house"
    },
    {
      id: 2,  
      name: "second",
      description: "this is my second house"
    },
    {
      id: 3,  
      name: "third",
      description: "this is my third house"
    },
]
  return (
      <>
        <p>this is saved home page</p>
        <ul className="dd-list">
          {items.map(item => (
            <Grid name={item.name} description={item.description} key={item.key}/>
          ))}
      </ul>
      </>
  )
    
}

export default SaveHome
