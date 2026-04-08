import {useEffect,useState} from 'react';

function CounterExample() {

const [count, setCount]=useState(0);
useEffect(()=>{
    document.title=`you clicked ${count} times`
},);


    return(
        <div>
            <p>You clicked {count}</p>
            <button onClick={ ()=> setCount(count+1)}> click me </button>
            <button onClick={ ()=> setCount(count-1)}>  Reset </button>
        </div>
       
    )
} 

export default CounterExample;