import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../Nav/Nav'

const Main = (props) => {
    return (
        <>
            <Nav />
            {props.children}
            <Footer />
        </>
    )
}

export default Main
