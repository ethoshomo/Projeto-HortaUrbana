import React from 'react'
import FooterPolitics from './FooterPolitics'
import FooterInformation from './FooterInformation'
import FooterFollowUs from './FooterFollow'
import FooterAboutUs from './FooterAbout'

function Rodape() {
    return (
        <footer id="rodape">
            <div className="d-flex flex-wrap justify-content-around bd-highlight mb-3">
                <FooterAboutUs />
                <FooterFollowUs />
                <FooterInformation />
                <FooterPolitics />
            </div>
        </footer>
    )
}

export default Rodape