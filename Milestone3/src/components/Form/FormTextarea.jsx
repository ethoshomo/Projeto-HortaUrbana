import React from 'react'

function Textarea({
    id,
    type,
    value,
    name,
    placeholder,
    onChange,
    rows,
    children
}) {
    return (
        <div className="form-floating formProd-description">
            <textarea
                type={type}
                value={value} 
                name={name}
                onChange={(e) => onChange(e.target.value)} 
                className="form-control" 
                id={id}
                placeholder={placeholder} 
                rows={rows || "3"}/>
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default Textarea