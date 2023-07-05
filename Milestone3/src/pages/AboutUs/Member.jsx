import React from 'react'

function Member({ imgName, name, nusp, email }) {
    return (
        <div className="col text-center">
            <img src={imgName ? 'images/' + imgName : 'images/none.png'}
                className="img-fluid aboutus-figure"
                alt={name} />
            
            <div className='container'>
                
                <div className='row'>
                    <div className='col-3 text-end'><span className='font-weight-bold'>Nome:</span></div>
                    <div className='col-9 text-start'>{name}</div>
                </div>

                <div className='row'>
                    <div className='col-3 text-end'><span className='font-weight-bold'>nUSP:</span></div>
                    <div className='col-9 text-start'>{nusp}</div>
                </div>

                <div className='row'>
                    <div className='col-3 text-end'><span className='font-weight-bold'>Email:</span></div>
                    <div className='col-9 text-start'>{email}</div>
                </div>

            </div>
        </div>
    )
}
export default Member