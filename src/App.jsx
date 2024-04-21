import './app.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/Home/Home";
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Rightbar';

function App() {

  const currentUser=false;
  const Layout=()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display:'flex'}}>
          <Leftbar/>
          <Outlet/>
          <Rightbar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to= '/Login'/>
    }

    return children
  }

  return (
  <> 
  <Router>
   
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={ <Home/>}/>
      <Route path='/Profile/:id' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      </Route>
      <Route path="/Login" element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
  </Router>
  
  </>
  );
}

export default App;
