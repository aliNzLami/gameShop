import React from 'react'

function Container(props) {
    return (
        <div className='container container_custom'>
            { props.children }
        </div>

    )
}

export default Container