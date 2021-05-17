import prompt from 'prompt-sync'
import Personagem from './Personagem'

let teclado = prompt()
let option: number = 0

let personagem: Personagem = new Personagem('Sansa Stark', 100, 50, 10, 20)

while (option != 9 && personagem.estaVivo()) {
  console.log(`Guerreiro: ${personagem.nome}`);
  console.log('+==[ Ações ]====================+')
  console.log('| 1. Treinar Ataque             |')
  console.log('| 2. Treinar Defesa             |')
  console.log('| 3. Descançar                  |')
  console.log('| 4. Entrar em Batalha          |')
  console.log('| 8. Imprimir Atributos         |')
  console.log('| 9. Sair do Jogo               |')
  console.log('+===============================+')

  option = +teclado('Escolha uma Ação: ')

  switch (option) {
    case 1:
      personagem.treinarAtaque()
      console.log(personagem.mostrarAtributos())
      break
    case 2:
      personagem.treinarDefesa()
      console.log(personagem.mostrarAtributos())
      break
    case 3:
      let horas: number = +teclado('Horas de descanço: ')
      personagem.descansar(horas)
      console.log(personagem.mostrarAtributos())
      break
    case 4:
      let danoSofrido = personagem.batalhar()
      console.log(`Dano sofrido: ${danoSofrido.toFixed(1)}`)
      console.log(personagem.mostrarAtributos())
      break
    case 8:
      console.log(personagem.mostrarAtributos())
      break
    case 9:
      break
  }
}

console.log('Fim de Jogo!')
