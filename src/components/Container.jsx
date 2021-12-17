import React from 'react'
import "./container.css"




const Container = ({children, styleContainer}) => {
    return (
        <div className='container' style={styleContainer}>
            {children}
        </div>
    )
}

export default Container
