import React, { useContext } from 'react';
import {Routes, Route} from "react-router";

// CONTEXT
import { RouteContext } from './assets/context/RouteContext';

// Components
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar';

// GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function App() {

  const routesList = useContext(RouteContext);

  return (
    <>
    <Navbar /> 

    <SearchBar />
      <Routes>
        <Route key="gameShop">
          {
            routesList
            &&
            Object.entries(routesList).map( (route) => {
              // route --> ['home', {…}] 
              return (
                <Route key={route[0]} path={route[1].url} element={route[1].element} />
              )
            } )
          }
        </Route>
      </Routes>

    <Footer />
    <ToastContainer />
    </>
  )
}

export default App