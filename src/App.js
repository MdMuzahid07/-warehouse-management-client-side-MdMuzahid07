import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/HomeComponents/Login/Login';
import SignUp from './components/HomeComponents/SignUp/SignUp';
import Home from './components/HomeComponents/Home/Home';
import Error from './components/Error/Error';
import Products from './components/Products/Products';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import { ToastContainer } from 'react-bootstrap';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Inventory from './components/HomeComponents/Inventory/Inventory';


function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/inventory/:inventoryId' element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }></Route>
          <Route path='/manageitems' element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }></Route>
          <Route path='/myitems' element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/products' element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }></Route>
          <Route path="/*" element={<Error></Error>}></Route>
        </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
