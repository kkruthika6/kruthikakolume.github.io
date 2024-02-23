import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, Skills, Testimonials, Education, Experience, Contacts, Projects } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Testimonials />
            <Contacts />
        </div>
    )
}

export default Main
