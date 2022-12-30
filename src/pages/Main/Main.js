import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, About, Skills, Education, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education />            
            <Contacts />
        </div>
    )
}

export default Main
