import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/*import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
*/
import { changeToBlue, changeToGreen, changeToRed } from './userSlice';
// import styles from './Counter.module.css';
import '../../index.css';

export function Counter() {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  const color = useSelector((state) => state.color.value);

  return (
    <div style={{ backgroundColor: color }}>
      <main style={{ backgroundColor: color }}>
        <h2>Hello again</h2>

        <div className="button-container">
          <button onClick={() => dispatch(changeToRed())}>RED</button>

          <button onClick={() => dispatch(changeToBlue())}>BLUE</button>
          <button onClick={() => dispatch(changeToGreen())}>GREEN</button>
        </div>
      </main>
    </div>
    // <div>
    //   <div className="" style={{ backgroundColor: color }}>
    //     <button
    //       // className={styles.button}
    //       aria-label="color value"
    //       onClick={() => dispatch(changeToRed())}
    //     >
    //       RED
    //     </button>
    //     <span className={styles.value}>{color}</span>
    //     <button
    //       // className={styles.button}
    //       aria-label="blue value"
    //       onClick={() => dispatch(changeToBlue())}
    //     >
    //       BLUE
    //     </button>
    //   </div>
    // </div>
    // <div>
    //   <div className={styles.row}>
    //     <button
    //       className={styles.button}
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       -
    //     </button>
    //     <span className={styles.value}>{count}</span>
    //     <button
    //       className={styles.button}
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       +
    //     </button>
    //   </div>
    //   <div className={styles.row}>
    //     <input
    //       className={styles.textbox}
    //       aria-label="Set increment amount"
    //       value={incrementAmount}
    //       onChange={(e) => setIncrementAmount(e.target.value)}
    //     />
    //     <button
    //       className={styles.button}
    //       onClick={() => dispatch(incrementByAmount(incrementValue))}
    //     >
    //       Add Amount
    //     </button>
    //     <button
    //       className={styles.asyncButton}
    //       onClick={() => dispatch(incrementAsync(incrementValue))}
    //     >
    //       Add Async
    //     </button>
    //     <button
    //       className={styles.button}
    //       onClick={() => dispatch(incrementIfOdd(incrementValue))}
    //     >
    //       Add If Odd
    //     </button>
    //   </div>
    // </div>
  );
}
