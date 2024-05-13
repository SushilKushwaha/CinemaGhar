import React, { useEffect, useState } from "react";
import { Navbar, Image, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { getAllMovies } from "../api-helpers/api-helpers";
import { FaSearch } from 'react-icons/fa';
import Auth from '../components/Auth/Auth';
import { Link } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "../store";

const Header = () => {

  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn);
  const [value, setValue] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((error) => console.log(error));
  }, []);

  const logout = (isAdmin) => {
    dispatch(isAdmin ? adminActions.logout() : userActions.logout());
    
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Navbar isBordered className="bg-zinc-300">
      <Link to='/'>
        <NavbarContent justify="between" className="w-full">
          <NavbarBrand className="flex items-center">
            <Image src="/cinemaghar.jpg" width="150" height="150" alt="Logo" />
          </NavbarBrand>
        </NavbarContent>
      </Link>

      <NavbarContent as="div" className="items-center flex-grow" justify="end">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search movies..." 
            className='bg-transparent focus:outline-none w-24 sm:w-64 border border-gray-300 rounded-md py-2 pl-8 pr-3' 
            value={searchQuery}
            onChange={handleSearchChange}
            list="movieOptions" 
          />
          <datalist id="movieOptions"> 
            {movies.map((movie) => ( 
              <option key={movie._id} value={movie.title} /> 
            ))}
          </datalist>
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <NavbarItem className="flex items-center ml-4">
          <Link to="/movies">
            <button className="hidden sm:block mr-4">MOVIES</button>
          </Link>
          <Box display={"inline-flex"} className="ml-4">
            <Tabs textColor="black" value={value} onChange={(e, val) => setValue(val)}>
              
              {!isAdminLoggedIn && !isUserLoggedIn && (
                [
                <Tab key={"admin"} label="Admin" LinkComponent={Link} to="/admin" />,
                <Tab key={"user"} label="Login" LinkComponent={Link} to="/auth" />
                ]
              )};
              {isUserLoggedIn && (
                [
                <Tab key={"profile"} label="Profile" LinkComponent={Link} to="/user" />,
                <Tab key={"logout"} onClick={() => logout(false)} label="Logout" LinkComponent={Link} to="/" />
                ]
              )};
              {isAdminLoggedIn && (
                [
                  <Tab label="Add movies" LinkComponent={Link} to="/add" />,
                <Tab key={"profile"} label="Profile" LinkComponent={Link} to="/user-admin" />,
                <Tab key={"logout"} onClick={() => logout(true)} label="Logout" LinkComponent={Link} to="/" />
                ]
              )};
              
            </Tabs>
          </Box>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
