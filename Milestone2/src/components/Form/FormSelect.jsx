import React from 'react'

function FormSelect({ id, value, name, onChange, children}) {

    return (
        <>
            <label 
                forhtml="selectProd" 
                className="form-label">
                {children}
            </label>

            <select 
                name={name} 
                onChange={e => onChange(e.target.value)} 
                value={value}
                id={id}
                className="form-select formProd-produto" 
                aria-label="Produto Selecionado"
                defaultValue={value || 'DEFAULT'}>

                <option value="DEFAULT">Selecione o Produto</option>
                <option value="Alface">Alface</option>
                <option value="Tomate">Tomate</option>
                <option value="Pepino">Pepino</option>
                <option value="Chuchu">Chuchu</option>
                <option value="Rucula">Rucula</option>
            
            </select>
        </>
    )
}
export default FormSelect