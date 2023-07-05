import React from 'react'

function Carousel() {
    return (
        <article id="main-carousel">
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://saberhortifruti.com.br/wp-content/uploads/2021/06/cultivo-de-hortalicas.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://saberhortifruti.com.br/wp-content/uploads/2020/10/revolucao-dos-tomateiros.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://saberhortifruti.com.br/wp-content/uploads/2021/04/hidroponia-mobile.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </article>
    )
}

export default Carousel