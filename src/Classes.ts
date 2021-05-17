import { Personagem } from './Personagem'
import { Util } from './Util'

export class Warrior extends Personagem {
  private _forca: number
  private _agilidade: number

  constructor(nome: string) {
    super(nome)
    this._armadura = Util.randomizar(1_000, 10_000)
    this._vidaMaxima = Util.randomizar(200, 1_000)
    this._vidaAtual = Util.randomizar(20, this._vidaMaxima)
    this._forca = Util.randomizar(100, 1_000)
    this._agilidade = Util.randomizar(100, 1_000)
  }

  public atacar(): string {
    return 'Ataque: Golpe de machado.'
  }
}

export class Priest extends Personagem {
  private _espirito: number
  private _versatilidade: number

  constructor(nome: string) {
    super(nome)
    this._armadura = Util.randomizar(100, 1_000)
    this._vidaMaxima = Util.randomizar(20, 1_000)
    this._vidaAtual = Util.randomizar(20, this._vidaMaxima)
    this._espirito = Util.randomizar(100, 1_000)
    this._versatilidade = Util.randomizar(100, 1_000)
  }

  public atacar(): string {
    return 'Ataque: Chuva de benção.'
  }
}

export class Mage extends Personagem {
  private _intelecto: number
  private _velocidade: number

  constructor(nome: string) {
    super(nome)
    this._armadura = Util.randomizar(100, 1_000)
    this._vidaMaxima = Util.randomizar(200, 1_000)
    this._vidaAtual = Util.randomizar(40, this._vidaMaxima)

    this._intelecto = Util.randomizar(100, 1_000)
    this._velocidade = Util.randomizar(100, 2_000)
  }

  public atacar(): string {
    return 'Ataque: Bola de Fogo.'
  }
}
