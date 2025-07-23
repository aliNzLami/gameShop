import React, { useContext, useState, useEffect } from 'react';
import {Link, useLocation, useNavigate } from "react-router"

// context
import { SearchContext } from '../../assets/context/SearchContext';
import { RouteContext } from '../../assets/context/RouteContext';
import { InCartContext } from '../../assets/context/InCartContext';
import { OrdersContext } from '../../assets/context/OrdersContext';
import { ProfileContext } from '../../assets/context/ProfileContext';

// icons
import search from "../../assets/icons/iconPics/search.png";
import profileIcon from "../../assets/icons/iconPics/profile.svg";
import cart from "../../assets/icons/iconPics/cart.jpg";

// components
import Dropdown from "../Dropdown";
import Offcanvas from '../Offcanvas';
import { toast } from 'react-toastify';



function NavIcons({navLinksList}) {

    const navigate = useNavigate();
    const location = useLocation();

    // ---------------------------------- States ---------------------------------- //
    const [sumProducts, setSumProducts] = useState(null);

    // ---------------------------------- Context ---------------------------------- //
    const { setShowSearch } = useContext(SearchContext) || {};
    const { profile, setLocalProfile, updateProfile } = useContext(ProfileContext) || {}
    const { inCartItems, setLocalItems } = useContext(InCartContext) || {};
    const { updateOrdersList } = useContext(OrdersContext) || {};

    const routesList = useContext(RouteContext);

    // ---------------------------------- Functions ---------------------------------- //
    const onClickProfile = (item) => {
        if(item === "Login") navigate(routesList.login.url);

        if(item === "Orders") {
            if(profile) {
                navigate(routesList.ordersList.url);
            }
            else {
                navigate(routesList.login.url);
                toast.info("First, Login to Your Profile")
            }
        } 
        
        if(item === "My Profile") {
            if(profile) {
                navigate(routesList.profile.url);
            }
            else {
                navigate(routesList.login.url);
                toast.info("First, Login to Your Profile")
            }
        }

        if(item === "Logout") {
            updateProfile(null);
            updateOrdersList([])
            toast.success("You Logged Out");
            navigate(routesList.home.url);
            window.location.reload()
        }

    }

    const onClickSearch = () => {
        if(routesList) {
            if(location.pathname !== routesList.collection.url) {
                navigate(routesList.collection.url);
            }
            setShowSearch(true);
        }
    }

    const updateSumProducts = () => {
        let sum = 0;
        for(let item of inCartItems) {
            sum += item.number
        }
        setSumProducts(sum);
    }

    const checkMember = () => {
        
    }

    // ---------------------------------- Effects ---------------------------------- //

    useEffect(() => {
        if(setLocalItems, setLocalProfile) {
            setLocalItems();
            setLocalProfile();
        }
        checkMember();
    }, [])
    
    useEffect(() => {
        if(inCartItems) {
            updateSumProducts();
        }
    }, [inCartItems])
    
    return (
        <div className="flex items-center gap-6">

            <div className='w-6.5 cursor-pointer' data-testid='search' onClick={onClickSearch}>
                <img src={search} />
            </div>

            <div data-testid='profile'>
                <Dropdown 
                    options={["My Profile", "Orders", `${profile && Object.keys(profile).length ? "Logout" : "Login"}`]} 
                    placeholder={ <img src={profileIcon} className='w-6.5' /> } 
                    boxHolderClassName="navbar_dropdown_holder" 
                    boxClassName="navbar_dropdown_box"
                    afterClick={onClickProfile}
                />
            </div>

            <Link to={routesList?.cart?.url??""} >
                <div data-testid='cart' className='w-7 cursor-pointer relative'>
                    <img src={cart}  />
                    <p className={`absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 ${sumProducts && "bg-red-700"}  text-white aspect-square rounded-full text-[8px]`}>
                        { sumProducts }
                    </p>
                </div>
            </Link>

            <div className='navbar_offcanvas_holder'>
                <Offcanvas navLinksList={navLinksList} />
            </div>
        </div>
    )
}

export default NavIcons;


