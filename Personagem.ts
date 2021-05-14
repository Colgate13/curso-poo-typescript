import prompt from 'prompt-sync'

class Personagem {
  constructor(
    public nome: string,
    public vida: number,
    public energia: number,
    public ataque: number,
    public defesa: number
  ) {}
}

let teclado = prompt()
let option: number = 0

let sansa: Personagem = new Personagem('Sansa Stark', 100, 50, 10, 20)

while (option != 9) {
  console.log('+========= Personsagem =========+')
  console.log('| 1. Treinar Ataque             |')
  console.log('| 2. Treinar Defesa             |')
  console.log('| 3. Imprimir Atributos         |')
  console.log('| 9. Sair do Treinamento        |')
  console.log('+===============================+')

  option = +teclado('Escolha uma Ação: ')

  switch (option) {
    case 1:
      sansa.ataque += 2
      sansa.energia -= 8

      console.log('')
      console.log('+===============================+')
      console.log(`| Novo ataque: ${sansa.ataque}`)
      console.log(`| Energia: ${sansa.energia}`)
      console.log('+===============================+')
      console.log('')

      break
    case 2:
      break
    case 9:
      break
  }
}
