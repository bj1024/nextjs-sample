import React, { useState, useContext } from 'react'
import styles from '../styles/counter.module.css'
import { DashboardCtx } from '../pages/dashboard'

type Props = {
  mycount?: Number;
};

export const Counter = ({ mycount }: Props) => {
  const { name, url,setName } = useContext(DashboardCtx);

  const initialState = Math.floor(Math.random() * 10) + 1
  const [count, setCount] = useState(initialState)

  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className="col">
          <div className={`${styles.counterlabel}`}>{count}</div>
        </div>
      </div>
      <div className="row">
        <div className="col">

          <button onClick={() => setCount(prevState => prevState + 1)}>
            + 1
          </button>
        </div>
        <div className="col">
          <button onClick={() => setCount(count - 1)}>- 1</button>
        </div>
        <div className="col">
          <button onClick={() => setCount(0)}>０</button>
        </div>
        <div className="col">
          <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div>props mycount={mycount}</div>
        </div>
        <div className="col"></div>
        <div>dashboardContext =[{name}]</div>
        <div>url =[{url}]</div>
      </div>
      <div className="col">
          <button onClick={() => setName("cleared.")}>test</button>
        </div>
    </div>

  )
}

// const SampleComponent1 = () => {
//   return <div>Hello TypeScript!</div>
// }

export default Counter;


// export default function Counter({ children }: { children: React.ReactNode }) {
//   const initialState = Math.floor(Math.random() * 10) + 1

//   const [count, setCount] = useState(initialState)

//   return (
//        <div className={styles.container}>
//       <div className={`${styles.counterlabel}`}>{count}</div>
//       <button onClick={() => setCount(prevState => prevState + 1)}>
//           + 1
//         </button>
//       <button onClick={() => setCount(count - 1)}>- 1</button>
//         <button onClick={() => setCount(0)}>０</button>
//         <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>

//        </div>
//   )
// }
