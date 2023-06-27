import { useState } from "react";
import classes from './Counter.module.scss'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(prev => prev + 1)
  }
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increase} className={classes.btn}>increase</button>
    </div>
  )
}
export default Counter