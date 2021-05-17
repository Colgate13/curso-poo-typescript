import { Util } from './Util'

export default class Personagem {
  protected _nome: string
  protected _armadura: number
  protected _vidaMaxima: number
  protected _vidaAtual: number

  constructor(nome: string) {
    this._nome = nome
    this._armadura = Util.randomizar(100, 1_000)
    this._vidaMaxima = Util.randomizar(100, 1_000)
    this._vidaAtual = Util.randomizar(100, this._vidaMaxima)
  }
}

/* Caso seja necessário proibir a herança de uma classe, 
adicionamos um private na ferente do costrutor. 

  Exemplo:
    private constructor(...){
      // ... 
    }

*/
