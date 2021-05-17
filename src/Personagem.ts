import { Util } from './Util'

// Criação de uma classe abstrata, que não pode ser estânciada, apenas herdada.
// Pode ser chamda de "classe incompleta".
export abstract class Personagem {
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

  // Método abastrato que deve ser implementado nas subclasses.
  public abstract atacar(): string
}

/* Caso seja necessário proibir a herança de uma classe, 
adicionamos um private na ferente do costrutor. 

  Exemplo:
    private constructor(...){
      // ... 
    }

*/
