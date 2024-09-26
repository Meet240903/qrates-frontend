import React, { useState } from 'react'
import CassatesAllProjects from './cassatesPages/CassatesAllProjects'
import CassatesCrowdfunding from './cassatesPages/CassatesCrowdfunding'
import CassatesPurchase from './cassatesPages/CassatesPurchase'

const CassatesPage = () => {
    const [selectedPage, setSelectedPage] = useState(1)

    return (
        <>
            <div className='records-page-section-container'>
                <h1 onClick={() => setSelectedPage(1)}
                    style={{
                        color: selectedPage === 1 ? '#fff' : ''
                    }}
                >All projects</h1>
                <h1 onClick={() => setSelectedPage(2)}
                    style={{
                        color: selectedPage === 2 ? '#fff' : ''
                    }}
                >Crowdfunding</h1>
                <h1 onClick={() => setSelectedPage(3)}
                    style={{
                        color: selectedPage === 3 ? '#fff' : ''
                    }}
                >Purchase</h1>
            </div>
            {
                selectedPage === 1 && <CassatesAllProjects filterFill="all projects" />
            }
            {
                selectedPage === 2 && <CassatesCrowdfunding filterFill="crowdfunding" />
            }
            {
                selectedPage === 3 && <CassatesPurchase filterFill="purchase" />
            }
        </>
    )
}

export default CassatesPage
