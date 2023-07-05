import React from 'react'
import FormLogin from './FormLogin'
import FormRegister from './FormRegister'

function AuthTab() {

    // Os elementos de Nav Tab podem ser componentizados,
    // mas, ganhariam muita complexidade. Por isso, deixou-se
    // na forma abaixo.
    return (
        <>
            <ul className="nav nav-tabs box-login" id="tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                        type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Login</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                        type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Cadastro</button>
                </li>
            </ul>

            <div className="tab-content border border-top-0 box-login" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                    tabIndex="0">
                    <FormLogin />
                </div>

                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                    tabIndex="0">
                    <FormRegister />
                </div>

            </div>
        </>
    )
}

export default AuthTab