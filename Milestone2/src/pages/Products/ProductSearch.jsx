import React from 'react'
import { useState, useEffect } from 'react'
import Input from '../../components/Form/FormInput'
import ListProducts from './ListProducts'

function CardList({ data }) {

    // Variáveis dinâmicas
    const [search, setSearch] = useState('')
    const [list, setList] = useState([])
    
    useEffect(()=>{
        setList(data.current)
    },[data])

    return (
        <>
            <div className="container-search">
                <Input
                    className='search text-center'
                    id='inputSearch'
                    type='search'
                    value={search}
                    name='search'
                    placeholder="Pesquisar produto. Ex: 'Alface'"
                    onChange={setSearch}>
                    Pesquisar produto. Ex: 'Alface'
                </Input>
            </div>

            <ListProducts search={search} list={list} />
        </>
    )
}

export default CardList