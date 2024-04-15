'use client'

import React, { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar} from "@nextui-org/react";
import Image from "next/image";
import {FaSearch} from 'react-icons/fa';
import Loginmodal from '@/app/login/loginmodal'
import { getAllMovies } from "@/api-helpers/api-helpers";
import { Link } from "react-router-dom";
export default function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((data) => setMovies(data.movies)).catch((error) => console.log(error));
  }, []);

  return (
    
    <Navbar isBordered className="bg-zinc-300">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Image src="/cinemaghar.jpg" width = "150" height="150" alt="" />
          <p className="text-orange-600 p-1 text-2xl">CinemaGhar</p>
        </NavbarBrand>
        
        
      </NavbarContent>

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
      <Dropdown>
      <DropdownTrigger>
        <button>Movies</button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" href="/movies">Now Showing</DropdownItem>
        <DropdownItem key="copy" href="/movies">Coming Soon</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
          </NavbarItem>
          
      <NavbarItem>
        <Loginmodal/>
        </NavbarItem>
    
      </NavbarContent>
    </Navbar>
  );
}
