import Personagem from './src/Personagem'
import { Mage, Priest, Warrior } from './src/Classes'

let mage: Personagem = new Mage('Alakazan')
let warrior: Personagem = new Warrior('Fuzarnin')
let priest: Personagem = new Priest('Curander')

console.log('mage :>> ', mage)
console.log('warrior :>> ', warrior)
console.log('priest :>> ', priest)
