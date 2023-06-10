import React from 'react'

function InputNumber({
    id,
    value,
    name,
    placeholder,
    onChange,
    setChange,
    min,
    max,
    classes,
    children,
    limit
}) {
    return (
        <div className="form-floating mb-3 formProd-quantidade">
            <input 
                type="number"
                value={value} 
                name={name}
                onChange={(e) => onChange(e, setChange, limit ? limit : max)} 
                className={classes || 'form-control'}
                id={id}
                placeholder={placeholder} 
                min={min}
                max={max}/>
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default InputNumber