import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

function Game() {

    const navigate = useNavigate()

    // Coleta os elementos do DOM para manipulação
    const houses = document.getElementsByClassName('house-game')

    const playerX = 'X' // Para o turno do O
    const playerO = 'O' // Para o turno do O
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
        let color = isTurn ? '#b8b8b8' : '#2b2b2b'  // Decide o css

        house.textContent = turn
        house.style.color = color

        checkWinner(turn) // Checa se o movimento foi um vencedor

    }

    // Checa se temos um vencedor 
    function checkWinner(turn) {
        // Para cada combinação possível checamos se ele é possível utilizando o every
        const winner = winnerCond.some((comb) => {
            return comb.every((index) => {
                return houses[index].textContent === turn
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
            if (!isNaN(i) && (houses[i].textContent === playerX || houses[i].textContent === playerO)) {
                count++
            }
        }

        return count === 9 ? true : false
    }

    function endGame(winner = null) {
        const result = document.getElementById('winner-game')
        const restar = document.getElementById('restart-game')
        
        // Checamos se houve um vencedor, em caso positivo imprimimos ele, senão empate
        if (winner) {
            setTimeout(() => {
                const result = document.getElementById('winner-game')
                result.textContent = isTurn ? 'The winner is X' : 'The winner is O'
            }, 300)
        } else if (checkTie()) {
            result.textContent = 'Tie, nice try!'
        }

        end = !end  // Considera o jog terminado, pra IA não completar o resto
        let count = 3 // Contador de reinicio
        
        const interval = setInterval(() => {
            restar.textContent = 'Restarting in ' + count--
        }, 1000)

        const timeout = setTimeout(() => {
            for (let h of houses) {
                h.textContent = ' '
            }

            result.textContent = ' '
            restar.textContent = ' '
            end = !end
            clearInterval(interval)
        }, 4000) // Reinicia
        
        return () => clearTimeout(timeout)
    }

    return (
        <section id="paginaGame" className="boxContent">
            <h1>Game</h1>
            
            <p className="p-game">Este é um jogo da velha multiplayer.</p>
            <p className="p-game">Quando o jogo chegar ao fim, ele será reiciado em 3 segundos e poderá ser jogador quantas vezes quiser.</p>
            
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