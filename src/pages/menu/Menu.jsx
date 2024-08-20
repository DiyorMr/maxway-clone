import React from 'react'
import Lavash from '../lavash/Lavash'
import Club from '../club/Club'
import Box from '../box/Box'
import News from '../news/News'
import Header from '../header/Header'

const Menu = () => {
    return (
        <>
            <Header />
            <News />
            <Box />
            <Club />
            <Lavash />
        </>
    )
}

export default Menu