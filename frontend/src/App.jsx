
import Header from "./components/Header";
import {NextUIProvider} from "@nextui-org/react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Footers from "./components/Footer";
import HomePage from "./components/HomePage";
import Movies from "./components/Movies/Movies";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import { useSelector } from "react-redux";


function App() {

  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn);
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);

  return <BrowserRouter>
    
        <Header />
        
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          
        </section>
        
        <Footers />
    </BrowserRouter>
  
};

export default App;
