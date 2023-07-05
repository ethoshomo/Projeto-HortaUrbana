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
                aria-label="Produto Selecionado">

                <option value="DEFAULT">Selecione o Produto</option>
                <option value="Alface">Alface</option>
                <option value="Abóbora">Abóbora</option>
                <option value="Alho">Alho</option>
                <option value="Azedinha">Azedinha</option>
                <option value="Batata">Batata</option>
                <option value="Beterraba">Beterraba</option>
                <option value="Cebola">Cebola</option>
                <option value="Cenoura">Cenoura</option>
                <option value="Chuchu">Chuchu</option>
                <option value="Couve">Couve</option>
                <option value="Ervilha">Ervilha</option>
                <option value="Fava">Fava</option>
                <option value="Inhame">Inhame</option>
                <option value="Mandioquinha">Mandioquinha</option>
                <option value="Milho">Milho</option>
                <option value="Nabo">Nabo</option>
                <option value="Palmito">Palmito</option>
                <option value="Pepino">Pepino</option>
                <option value="Quiabo">Quiabo</option>
                <option value="Rabanete">Rabanete</option>
                <option value="Rucula">Rúcula</option>
                <option value="Tomate">Tomate</option>
                <option value="Tomatinho">Tomatinho</option>
                <option value="Vagem">Vagem</option>   
            </select>
        </>
    )
}
export default FormSelect