
import Header from "./components/Header";
import {NextUIProvider} from "@nextui-org/react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Footers from "./components/Footer";
import HomePage from "./components/HomePage";
import Movies from "./components/Movies/Movies";
import Admin from "./components/Admin/Admin";
import Login from "./pages/Login";


function App() {

  return <BrowserRouter>
    <NextUIProvider>
       
        <Header />
        
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signin" element={<Login />} />
          </Routes>
          
        </section>
        
        <Footers />
      
    </NextUIProvider>
    </BrowserRouter>
  
};

export default App;
