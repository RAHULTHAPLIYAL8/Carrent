import { useState } from 'react'
import Sign from './Components/Sign'
import Card from './Components/Card'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import data from "./Components/add"
import But from "./Components/But"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 class="heading_style">List of top 10 Anime series</h1>
    <Card 
    img={data[0].img}
    name={data[0].name}
    vnumber={data[0].vnumber}
    seat={data[0].seat}
    rent={data[0].rent}
    />
    <Card 
    img={data[1].img}
    name={data[1].name}
    vnumber={data[1].vnumber}
    seat={data[1].seat}
    rent={data[1].rent}
    />
    <Card 
    img={data[2].img}
    name={data[2].name}
    vnumber={data[2].vnumber}
    seat={data[2].seat}
    rent={data[2].rent}
    />
    <Card 
    img={data[3].img}
    name={data[3].name}
    vnumber={data[3].vnumber}
    seat={data[3].seat}
    rent={data[3].rent}
    />
    <Card 
    img={data[4].img}
    name={data[4].name}
    vnumber={data[4].vnumber}
    seat={data[4].seat}
    rent={data[4].rent}
    />
    <Card 
    img={data[5].img}
    name={data[5].name}
    vnumber={data[5].vnumber}
    seat={data[5].seat}
    rent={data[5].rent}
    />
    <Card 
    img={data[6].img}
    name={data[6].name}
    vnumber={data[6].vnumber}
    seat={data[6].seat}
    rent={data[6].rent}
    />
   {data.map((m, i) => (
  <Card 
    key={i}
    img={m.img}
    name={m.name}
    vnumber={m.vnumber}
    seat={m.seat}
    rent={m.rent}
  />
))}
    <But/>
    </>
   
 ) }

export default App


//   

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//     </> */

/* <BrowserRouter>
<Routes>
    <Route path='/' element={<Form/>}/>
    <Route path='/Sign' element={<Sign/>}/>
</Routes>
</BrowserRouter> */
