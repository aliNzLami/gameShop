import React from 'react';
import {NavLink} from "react-router";


function NavItems({items}) {

    return (
        <ul data-testid='navbar_lg' className='hidden md:flex gap-5 text-sm text-gray-400'>
            {
              items.map( (eachNav) => {
                  return (
                      <div key={Math.random()}>
                        <NavLink to={eachNav.url}>
                          <div className='flex flex-col items-center gap-1 navLink_items'>
                            <span className='font-bold'>{eachNav.name}</span>
                          </div>
                        </NavLink>
                      </div>
                  )
                }
              )
            }
        </ul>
    )
}

export default NavItems