import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import Image from "next/image";
import Link from 'next/link'
import Loginmodal from '@/app/login/loginmodal'
export default function App() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Image src="/cinemaghar.jpg" width = "150" height="150" />
          
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem justify="end">
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      

      <NavbarContent as="div" className="items-center" justify="end">
      <NavbarItem>
        <Loginmodal/>
        {/* <Button  color="primary"  variant="flat"  >
        <Link href="/login">
            Sign In
          </Link>
          </Button> */}
        </NavbarItem>
    
      </NavbarContent>
    </Navbar>
  );
}
