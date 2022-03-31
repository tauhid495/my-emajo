
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/inventory/Inventory';
import Order from './components/order/Order';
import Shop from './components/Shop/Shop';

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
      </Routes>
    </div>
  );
}


export default App;
