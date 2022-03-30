
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Countries from './Component/Countries/Countries';

import Resturent from './Component/Resturent/Resturent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/Resturent' element={<Resturent></Resturent>}>Home</Route>
        <Route path='/Countries' element={<Countries></Countries>}>Home</Route>
      </Routes>
       
    </div>
  );
}

export default App;
