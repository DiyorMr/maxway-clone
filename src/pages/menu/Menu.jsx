import React from 'react'
import Box from '../box/Box'
import Header from '../header/Header'
import { menuDataBaza } from './data'

const Menu = () => {
    return (
        <>
            <Header />
            {
                menuDataBaza.map((item, index) => <Box item={item} key={index} />)
            }
            {/* <News />
            <Box />
            <Club />
            <Lavash /> */}
        </>
    )
}

export default Menu