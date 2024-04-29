

import React, { useEffect, useState } from "react";
import {Navbar,Image, NavbarBrand, NavbarContent, NavbarItem, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar} from "@nextui-org/react";
import { getAllMovies } from "../api-helpers/api-helpers";
import {FaSearch} from 'react-icons/fa';
import Login from '../pages/Login'
import { Link } from "react-router-dom";


const Header = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((data) => setMovies(data.movies)).catch((error) => console.log(error));
  }, []);

  return (
    
    <Navbar isBordered className="bg-zinc-300">
      <Link to='/' >
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Image src="/cinemaghar.jpg" width = "150" height="150" alt="" />
          <p className="text-orange-600 p-1 text-2xl">CinemaGhar</p>
        </NavbarBrand>
      </NavbarContent>
      </Link>

      <NavbarContent as="div" className="items-center" justify="end">
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
    <input 
        type="text" 
        placeholder="Search movies..." 
        className='bg-transparent focus:outline-none w-24 sm:w-64' 
        list="movieOptions" 
    />
    <datalist id="movieOptions"> 
        {movies && movies.map((option) => ( 
            <option key={option._id} value={option.title} /> 
        ))}
    </datalist>
    <button>
        <FaSearch className='text-slate-600' />
    </button>
</form>

      <NavbarItem>
      <Link to="/movies">
        <button>Movies</button>
        </Link>
          </NavbarItem>
          <Login />
      </NavbarContent>
    </Navbar>
  );

};

export default Header;
