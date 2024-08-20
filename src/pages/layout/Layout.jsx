import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout