import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Login from './Login';
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
         
          <Routes>
              <Route exact path="/Login" element={<Login/>} />
              <Route exact path="/Register" element={<Register/>} />
              <Route exact path="/Update"  element={<Protected Cmp={UpdateProduct}/>}  />
              {/* <Route exact path="/Update" element={<UpdateProduct/>} /> */}
              {/* <Route exact path="/Add" element={<AddProduct/>}  /> */}
              <Route exact path="/Add"  element={<Protected Cmp={AddProduct}/>}  />
         </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
