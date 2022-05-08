import { useState } from "react";
import styles from './Counter.module.css';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count - 1);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={decrement}>-</button>
      <div className={styles.count}>{count}</div>
      <button className={styles.button} onClick={increment}>+</button>
    </div>
  );

}

export { Counter };
