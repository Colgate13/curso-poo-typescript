import { Mage, Priest, Warrior } from "./Classes";
import Personagem from "./Personagem";

let mage: Personagem = new Mage('Alakazan')
let warrior: Personagem = new Warrior('Fuzarnin')
let priest: Personagem = new Priest('Curander')

console.log('mage :>> ', mage);
console.log('warrior :>> ', warrior);
console.log('priest :>> ', priest);