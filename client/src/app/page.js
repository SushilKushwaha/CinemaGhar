"use client"
import Nav from '@/components/navBar/page'
import Footer from '@/components/footer/page'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import HomePage from '@/components/HomePage';
import Movies from './movies/Movies';
import Admin from './admin/Admin';



export default function Home() {
  return (
    <div>
      <Nav />
      <section>
        <div className='h-64 w-64 inline-flex gap-10 '>
          <img src='m-1.png'  />
          <img src='m-2.png'  />
          <img src='m-3.png'  /> 
        </div>

      </section> 
      <BrowserRouter>
            <Routes>
              <Route path='/' element={ <HomePage />} />
              <Route path='/movies' element={ <Movies />} />
              <Route path='/admin' element={ <Admin />} />
            </Routes>
          </BrowserRouter>

      <Footer />
    </div>
  )
};
