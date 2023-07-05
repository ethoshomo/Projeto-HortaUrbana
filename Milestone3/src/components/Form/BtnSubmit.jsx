import React from 'react'

function BtnSubmit({id, handleSubmit, classes, children}) {

    return (
        <button 
            id={id}
            type="submit"
            className={classes || "submit"}
            onClick={(e) => handleSubmit(e)}>{children}
        </button>        
    )
}
export default BtnSubmit


