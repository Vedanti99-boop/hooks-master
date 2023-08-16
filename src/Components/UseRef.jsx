//same as usestate(renders when state is updated) , useeffect (renders everytime if u dont use dependency [] )
//difference is it gets rendered only 1st time (at the time of mounting) we can update it using its current var and 
//using use ref we can direct manipulate dom elements 

import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {


    const [update,setUpdate]=useState(" ")

    const count = useRef(0)

    useEffect(()=>{
        count.current=count.current+1
    })

  return (
    
    <div>
        <input type="text" value={update} onChange={(e)=>setUpdate(e.target.value)} />
     <p> Count after each render :{count.current}</p>  
    </div>
  )
}

export default UseRef

