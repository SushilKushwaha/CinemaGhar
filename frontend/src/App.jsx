import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import {NextUIProvider} from "@nextui-org/react";
import Footers from "./components/Footer";



function App() {

  return ( 
    <NextUIProvider>
        <BrowserRouter>
        <Header />
        <Footers />
    </BrowserRouter>  
    </NextUIProvider>
  
  );
};

export default App;
