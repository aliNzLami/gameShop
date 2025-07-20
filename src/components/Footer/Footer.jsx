import React, { useContext } from 'react';

import { RouteContext } from '../../assets/context/RouteContext';

import logo from "../../assets/pictures/shopLogo/logo.jpeg"
import FooterLinks from './FooterLinks';
import Container from '../Container';


function Footer() {

    const routesList = useContext(RouteContext);

    const footerLinks = [
        routesList.home,
        routesList.about,
        // routesList.delivery,
        // routesList.pp,
    ]

    const footerContacts = [
        { name: "+1 1111 1111 1111" },
        { name: "lifegame@email.com" },
    ]

    return (
        <footer>
            <Container>
                <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
                    <div>
                        <div className="mb-5 w-32 footerLinks_img">
                            <img src={logo} />
                        </div>
                        <p className='w-full md:w-2/3 text-gray-400 footerLinks'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium, laboriosam obcaecati sapiente omnis, nostrum voluptatibus facilis veritatis doloribus veniam, vel dolore expedita cum. Blanditiis nisi commodi vitae hic explicabo.
                        </p>
                    </div>

                    <div>
                        <FooterLinks 
                            title={"SHOP"}
                            list={footerLinks}
                            isItRoute={true}
                        />
                    </div>

                    <div>
                        <FooterLinks 
                            title={"GET IN TOUCH"}
                            list={footerContacts}
                            isItRoute={false}
                        />
                    </div>
                </div>
            </Container>

            <div className='w-full footerLine' />

            <p className='py-5 text-sm text-center'>
                Copyright 2025 LifeGame - All Right Reserved
            </p>
        </footer>
    )
}

export default Footer;