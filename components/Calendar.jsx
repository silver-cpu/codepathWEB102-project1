import React from "react";
import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
        <tr>
        <th>

        </th>
        <th>
          Sunday
        </th>
        <th>
          Monday
        </th>
        <th>
          Tuesday
        </th>
        <th>
          Wednesday
        </th>
        <th>
          Thursday
        </th>
        <th>
          Friday
        </th>
        <th>
          Saturday
        </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="time">8 am</td>
          <td></td>
          <Event event='Fancy Dinner 🎩' color ='green'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="time">9 am</td>
          <td></td>
          <td></td>
          <Event event='Subway 🚊' color ='pink'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

          </tr>
        <tr>
          <td className="time">10 am</td>
          <td></td>
          <td></td>
          <Event event='The Bean 🫘' color ='blue'/>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Yolk 🍳' color ='green'/>
          </tr>
        <tr>
          <td className="time">11 am</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Starbucks ☕️' color ='green'/>
          <td></td>
          <td></td>
          </tr>
        <tr>
          <td className="time">12 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
        <tr>
          <td className="time">1 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
        <tr>
          <td className="time">2 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
        <tr>
          <td className="time">3 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
        <tr>
          <td className="time">4 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
        <tr>
          <td className="time">5 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
    </table>
    </div>
  )
}
export default Calendar;


/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

