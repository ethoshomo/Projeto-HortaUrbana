import React, { useState } from 'react'
import { toast } from 'react-toastify'

function User({ produtor, id, nome, email, tel, isAdministrator }) {
  const [administrator, setAdministrator] = useState(isAdministrator)

  const changeAdministrator = (value) => {
    if (administrator === value) {
      toast.error(
        administrator ? 'O usuário já é produtor!' : 'O usuário não pode ser rebaixado!',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      )
      return
    }

    produtor.isAdministrator = value
    
    setAdministrator(value)
  }

  return (
    <div id={id} className="border container container-user">
      <div className="row container-linha">
        <div className="col-3 text-end container-celula">Nome:</div>
        <div className="col-6 container-celula">{nome}</div>
        <div className="col-2 text-start container-celula">
          <button
            onClick={() => changeAdministrator(true)}
            className="btn btn-sm btn-success btn-config"
          >
            Promover
          </button>
        </div>
      </div>

      <div className="row container-linha">
        <div className="col-3 text-end container-celula">Email:</div>
        <div className="col-6 container-celula">{email}</div>
        <div className="col-2 text-start container-celula">
          <button
            onClick={() => changeAdministrator(false)}
            className="btn btn-sm btn-warning btn-config"
          >
            Rebaixar
          </button>
        </div>
      </div>

      <div className="row container-linha">
        <div className="col-3 text-end container-celula">Telefone:</div>
        <div className="col-6 container-celula">{tel}</div>
        <div className="col-2 text-start container-celula">
        </div>
      </div>

      <div className="row container-linha">
        <div className="col-3 text-end">É produtor?</div>
        <div className="col-6">{administrator ? 'Sim' : 'Não'}</div>
        <div className="col-2 container-celula"></div>
      </div>
    </div>
  )
}

export default User
