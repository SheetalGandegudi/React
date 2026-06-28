import react, { useEffect, useState } from 'react'
import Greeting from './Greeting'


export default function App() {
  const [name, setName] = useState("SHEETAL");
  const [color, setColor] = useState("PINK");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  });
    
    return (
    <div>
      <Greeting name={name}/>
      <button onClick={()=> setName("KEERTI")}>click for change</button>
      <h2>My fav color is {color}!</h2>
      <button onClick={()=> setColor("BLUE")}>Change Color</button>
      <h2>Count is {count}</h2>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
}