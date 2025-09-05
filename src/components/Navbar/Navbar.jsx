import React, { useContext } from 'react';
import { Link } from 'react-router';
import { RouteContext } from '../../assets/context/RouteContext';

// icon
import logo from "../../assets/pictures/shopLogo/logo.jpg";

// components
import NavItems from './NavItems';
import NavIcons from './NavIcons';
import Container from '../Container';


function Navbar() {

    const routesList = useContext(RouteContext);

    const navLinks = [
      routesList?.home??"",
      routesList?.collection??"",
      routesList?.contact??"",
      routesList?.about??"",
    ]

    return (
      <Container>
        <nav className='flex items-center justify-between py-5 font-medium'>

            <div data-testid='logo' className='w-15'>
              <Link to={routesList?.home?.url??""}>
                <img src={logo} />
              </Link>
            </div>

            <NavItems items={navLinks} />

            <NavIcons navLinksList={navLinks} />
        </nav>
      </Container>
    )
}

export default Navbar