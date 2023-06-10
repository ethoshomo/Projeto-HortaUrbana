import React from 'react'
import Card from '../../components/Card'

function ListProducts({ search, list }) {

    // Variável que recebe um array com dados filtrados.
    const filteredPosts = !!search ? (list.filter(post => {
        return post.id.toLowerCase().includes(search.toLowerCase())
    })) : (list)

    return (
        <div className="container-lista-cards">
            
            {!!search && (<>
                    {filteredPosts.map(card => <Card key={card._id + '|CardProdFiltered'} info={card} />)}
            </>)}

            {!search && (<>
                {list.map(card => <Card key={card._id + '|CardProd'} info={card} />)}
            </>)}
            
        </div>
    )
}

export default ListProducts