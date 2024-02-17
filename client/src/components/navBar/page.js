'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar} from "@nextui-org/react";
import Image from "next/image";
import {FaSearch} from 'react-icons/fa';
import Loginmodal from '@/app/login/loginmodal'
export default function App() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Image src="/cinemaghar.jpg" width = "150" height="150" />
          <p className="text-orange-600 p-1 text-2xl">CinemaGhar</p>
        </NavbarBrand>
        
        
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder="Search movies..." className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <button>
              <FaSearch className='text-slate-600' />
            </button>
           
        </form>
      <NavbarItem>
      <Dropdown>
      <DropdownTrigger>
       Movies
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Now Showing</DropdownItem>
        <DropdownItem key="copy">Coming Soon</DropdownItem>
        
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
