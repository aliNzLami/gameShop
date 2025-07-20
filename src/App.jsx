import React, { useContext } from 'react';
import {Routes, Route} from "react-router-dom";

// ---------------- PAGES
import { RouteContext } from './assets/context/RouteContext';

// ---------------- Components
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar';


function App() {

  const routesList = useContext(RouteContext);

  return (
    <>
    <Navbar /> 

    <SearchBar />
      <Routes>
        {
          Object.entries(routesList).map( (route) => {
            // route --> ['home', {…}] 
            return (
              <Route key={route[0]} path={route[1].url} element={route[1].element} />
            )
          } )
        }
      </Routes>

    <Footer />
    <ToastContainer />
    </>
  )
}

export default App