import React from 'react'
import './style.css'

function Game() {

    // Coleta os elementos do DOM para manipulação
    const houses = document.getElementsByClassName('house-game')

    const playerX = '<img src="images/tomateIcon.png" style="width:40px;height:50px;">' // Para o turno do O
    const playerO = '<img src="images/letuceIcon.png" style="width:40px;height:50px;">' // Para o turno do O
    let isTurn = true // Controla os turnos: X = true O = false
    let end = false // Se o jogo acabar não faz nada

    // Possibilidades de vitória
    const winnerCond = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    // Quando uma casa do tabuleiro é clicada mudamos o seu valor
    window.document.addEventListener('click', (e) => {
        if (e.target.matches('.house-game') && e.target.textContent === ' ' && !end) {
            play(e.target.id)
        }
    })

    // Função que realiza a jogada
    function play(id) {

        const house = document.getElementById(id) // Qual cada foi clicada
        let turn = isTurn ? playerX : playerO // Verifica o turno do jogador

        house.innerHTML= turn

        checkWinner(turn) // Checa se o movimento foi um vencedor

    }

    // Checa se temos um vencedor 
    function checkWinner(turn) {
        // Para cada combinação possível checamos se ele é possível utilizando o every
        const winner = winnerCond.some((comb) => {
            return comb.every((index) => {
                return houses[index].innerHTML === turn
            })
        })

        // Se temos um vencedor ou empate, mudamos o turno, se não muda o jogador
        if (winner) {
            endGame(turn)
        } else if (checkTie()) {
            endGame()
        } else {
            isTurn = !isTurn
        }
    }

    // Checa se tivemos um empate
    function checkTie() {
        let count = 0

        // Se todas as casas forem preenchidas temos um empate
        for (let i in houses) {
            if (!isNaN(i) && (houses[i].innerHTML === playerX || houses[i].innerHTML === playerO)) {
                count++
            }
        }

        return count === 9 ? true : false
    }

    function endGame(winner = null) {
        end = true  // Considera o jog terminado, pra IA não completar o resto
        const result = document.getElementById('winner-game')
        const restar = document.getElementById('restart-game')
        
        // Checamos se houve um vencedor, em caso positivo imprimimos ele, senão empate
        if (winner) {
            setTimeout(() => {
                const result = document.getElementById('winner-game')
                result.innerHTML = isTurn ? 'O vencedor é ' + playerX : 'O vencedor é ' + playerO
            }, 300)
        } else if (checkTie()) {
            result.innerHTML = 'Empate, boa tentativa!'
        }

        let count = 3 // Contador de reinicio
        
        const interval = setInterval(() => {
            restar.innerHTML = 'Reiniciando em ' + count--
        }, 1000)

        const timeout = setTimeout(() => {
            for (let h of houses) {
                h.innerHTML = ' '
            }

            result.innerHTML = ' '
            restar.innerHTML = ' '
            clearInterval(interval)
        }, 4000) // Reinicia
        
        return () => clearTimeout(timeout)
    }

    return (
        <section id="paginaGame" className="boxContent">
            <h1>Game</h1>
            <p className='p-game'>Este é um jogo gratuito que proporciona interação aos usuários no site.</p>
            
            <p className="p-game">Trata-se de um jogo da velha multiplayer, que conta com dois jogadores, denominados 
                <img className='icon-game' src="images/tomateIcon.png" alt=''/> e 
                <img className='icon-game' src="images/letuceIcon.png" alt=''/>. Além disso, o jogo sempre é iniciado pelo  
                <img className='icon-game' src="images/tomateIcon.png" alt=''/>. 
            </p>

            <p className="p-game">Ao término de cada partida, o jogo reinicia automaticamente após 3 segundos, permitindo que os jogadores participem quantas vezes desejarem.</p>
            

            <div className="container">
                <div id="board">
                    <div className="col-4 text-center container-celula border house-game" id="0">{' '}</div>
                    <div className="col-4 text-center container-celula border house-game" id="1">{' '}</div>
                    <div className="col-4 text-center container-celula border house-game" id="2">{' '}</div>
                    <div className="col-4 text-center container-celula border house-game" id="3">{' '}</div>
                    <div className="col-4 text-center container-celula border house-game" id="4">{' '}</div>
                    <div className="col-4 text-center container-celula border house-game" id="5">{' '}</div>
                    <div className="col-4 text-center container-celula border house-game" id="6">{' '}</div>
                    <div className="col-4 text-center container-celula border house-game" id="7">{' '}</div>
                    <div className="col-4 text-center container-celula border house-game" id="8">{' '}</div>
                </div>
            </div>
            <div id="winner-game">{' '}</div>
            <div id="restart-game">{' '}</div>
        </section>
    )
}

export default Game