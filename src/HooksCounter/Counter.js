import React,{useState} from 'react'
export default function Counter(){
    const [count,setCount]=useState(0)
    const [colour,setColour]=useState('black')
   const increment=()=>{
        setCount(prevCount=>prevCount+1)
        setColour(colour=>(count>=0?'green':'red'))
    }

    const decrement=()=>{
        setCount(prevCount=>prevCount-1)
        setColour(colour=>(count<=0?'red':'green'))
    }
    return(
        <div>
           <div style={{fontSize:'70px',color:colour}}> {count} </div>
            <div>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => [setCount(0),setColour('black')]}>Reset</button></div>
        </div>
    )
}

