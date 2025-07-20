import React from 'react';
import {NavLink} from "react-router-dom";


function NavItems({items}) {

    return (
        <ul className='hidden md:flex gap-5 text-sm text-gray-400'>
            {
              items.map( (eachNav) => {
                  return (
                      <div key={eachNav.name}>
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