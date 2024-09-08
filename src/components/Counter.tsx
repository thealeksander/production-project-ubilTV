import { useState } from "react"
import styles from './Counter.module.scss'

interface Props {

}

export const Counter = ({}: Props): JSX.Element => {
    const [count, setCounter] = useState(0)

    const increment = () => {
        setCounter(count + 1)
    }

    return (
        <div className={styles.button} >
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}