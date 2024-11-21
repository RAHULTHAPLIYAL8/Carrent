import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup.jsx';
import Signin from './Components/Signin.jsx';
import Cart from './Components/Cart.jsx';
import Card2 from './Components/Card2.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Cart/>}/>
        <Route path="/main" element={<Cart/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/card2" element={<Card2/>} />
        <Route path="/signin" element={<Signin/>} />
        {/* <Route path="/login" element={<Sign />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
