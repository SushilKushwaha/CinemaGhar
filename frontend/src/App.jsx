import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import TailEnd from "./components/Footer";
import {NextUIProvider} from "@nextui-org/react";



function App() {

  return ( 
    <NextUIProvider>
        <BrowserRouter>
        <Header />
            <TailEnd />
    </BrowserRouter>  
    </NextUIProvider>
  
  );
};

export default App;
