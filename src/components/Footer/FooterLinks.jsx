import React from 'react'
import { Link } from 'react-router-dom'

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
                                <li className='my-1' key={item.name}>
                                    <Link to={item.url}>
                                        { item.name }
                                    </Link> 
                                </li>
                            )
                        })

                    :

                        list.map(item => {
                            return (
                                <li key={item.name}> 
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