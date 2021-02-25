import React from 'react'

import NavLeft from './NavLeft'
import NavRight from './NavRight'

const Header = () => {
    return (
        <div className='header'>
            <NavLeft/>
            <NavRight/>
        </div>
    )
}

export default Header