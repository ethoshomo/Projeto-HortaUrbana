import User from './User'

import { users } from '../../database/database'

function AutorizarProdutor() {
    return (
      <section id="pag-autorizar-produtores" className="boxContent">
        <h1>Administrar Usuários</h1>
        <article id="list-users">
          {users ? (
            users.map(produtor => {
              if (produtor.isAdmin) {
                return null
              }
  
              return (
                <User
                  produtor={produtor}
                  key={produtor.id}
                  id={produtor.id}
                  nome={produtor.nome}
                  email={produtor.email}
                  tel={produtor.tel}
                  isAdministrator={produtor.isAdministrator}
                />
              );
            })
          ) : (
            'Não há produtores cadastrados!'
          )}
        </article>
      </section>
    )
}

export default AutorizarProdutor