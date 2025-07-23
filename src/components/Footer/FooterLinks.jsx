import React from 'react'
import { Link } from 'react-router'

function FooterLinks({ list, isItRoute, title }) {
    return (
        <>
            <p className='text-xl font-medium mb-5 footerLinks mainPurpleText'>
                { title }
            </p>
            <ul className='flex flex-col gap-1 text-gray-400 footerLinks'>
                {
                    isItRoute

                    ?

                        list.map(item => {
                            return (
                                <li className='my-1' key={Math.random()}>
                                    <Link to={item.url}>
                                        { item.name }
                                    </Link> 
                                </li>
                            )
                        })

                    :

                        list.map(item => {
                            return (
                                <li key={Math.random()}> 
                                    { item.name }
                                </li>
                            )
                        })
                }
            </ul>
        </>
    )
}

export default FooterLinks