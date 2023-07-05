import React from 'react'
import Member from './Member'

function AboutUs() {
    return (
        <section id="pageAboutUs" className="boxContent">

            <h1>Sobre Nós</h1>
            <div class="container">
                <div class="row">
                    
                    <Member 
                        name="Carlos Filipe de Castro Lemos"
                        imgName="filipe.png"
                        nusp="12542630"
                        email="filipelemos@usp.br"/>
                    
                    <Member 
                        name="João Gabriel Saseron Roberto Amorim"
                        imgName="sasseron.png"
                        nusp="12542564"
                        email="jgsasseron@usp.br"/>
                    
                    <Member 
                        name="Pedro Guilherme dos Reis Teixeira"
                        imgName="pao.jpg"
                        nusp="12542477"
                        email="pedro.guilherme2305@usp.br"/>
                </div>
            </div>

        </section>
    )
}
export default AboutUs