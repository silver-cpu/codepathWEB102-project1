import './App.css';
import Calendar from './components/Calendar'
import Event from './components/Event'



const App = () => {

  return (
    /*<div><h1>Itinerary for Chicago</h1>
    <h2>Welcome to Chicago!</h2>
    <Calendar />
    </div>*/
    
    
    <div className="App">
      <h1><Event event="What's your favorite food option?" color ='green'/></h1>
      <h2><Event event="These are some example food options" color ='green'/></h2>
      <h4><Event event="Created by Matteen Mahfooz" color ='green'/></h4>
      <h6><Event event="Utilizing React and Node.js" color ='pink'/></h6>
    <div class="columns">
      <img src="./src/img/coffee.jpg"></img>
      <p><b><Event event="coffee and breakfast" color ='blue'/></b></p>
      <p class="small"><Event event="Start your day off right with our delicious selection of freshly brewed coffee and wholesome breakfast options. Whether you're in the mood for a rich espresso, a smooth latte, or a perfectly steeped cup of tea, we've got the ideal pick-me-up to fuel your morning. Pair your beverage with our scrumptious breakfast items, including buttery croissants, warm oatmeal, fruit-filled muffins, and savory avocado toast. Every bite and sip is crafted with care, offering a perfect balance of flavor and energy to kickstart your day. Join us for the ultimate breakfast experience!"/>
</p></div>
    <div class="columns" >
    <img src="./src/img/asian.jpg"></img>
      <p><b><Event event="asian food options" color ='blue'/></b></p>
      <p class="small"><Event event="Indulge in the vibrant flavors of Asia with our carefully curated selection of dishes. From aromatic Thai curries to savory Chinese stir-fries and fresh sushi rolls, every bite brings the essence of traditional Asian cuisine to your table. Our menu features a variety of options made with the freshest ingredients, expertly prepared to deliver bold, authentic tastes. Whether you're craving a warming bowl of pho, crispy tempura, or a flavorful bowl of ramen, we have something to satisfy every palate. Experience the rich culinary heritage of Asia, right here at our restaurant!"/>
      </p></div>
    <div class="columns">
    <img src="./src/img/middleeast.jpg"></img>
      <p><b><Event event="middle eastern food options" color ='blue'/></b></p>
      <p class="small"><Event event="Embark on a culinary journey through the Middle East with our exquisite range of flavorsome dishes. From tender kebabs and grilled meats to creamy hummus and freshly baked pita, every meal is a celebration of vibrant spices and aromatic herbs. Our menu features traditional favorites like falafel, shawarma, tabbouleh, and rich, slow-cooked stews, all crafted with the finest ingredients to bring out the authentic tastes of the region. Whether you’re in the mood for a light mezze or a hearty main dish, our Middle Eastern offerings promise to satisfy your cravings with every bite."/>
      </p></div>
    </div>

  )
}

export default App;


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

