export default class Personagem {
  constructor(
    private _nome: string,
    private _vida: number,
    private _energia: number,
    private _ataque: number,
    private _defesa: number
  ) {}

  // Toda vez que pensar em ler dados na classe, use os parâmetros
  // Toda vez que pensar em imprimir algo, use retorno.

  public get nome(): string {
    return this._nome
  }

  public set nome(nome: string) {
    this._nome = nome
  }

  public mostrarAtributos(): string {
    return `\n+=[ Atributos: \n|   Nome: ${
      this.nome
    } \n|   Vida: ${this._vida.toFixed(
      1
    )} \n|   Energia: ${this._energia.toFixed(
      1
    )} \n|   Ataque: ${this._ataque.toFixed(
      1
    )} \n|   Defesa: ${this._defesa.toFixed(1)} \n`
  }

  public treinarAtaque(): void {
    if (this.estaVivo()) {
      this._ataque += this.randomizar(7)
      this._energia -= this.randomizar(10)
    }
  }

  public treinarDefesa(): void {
    if (this.estaVivo()) {
      this._defesa += this.randomizar(5)
      this._energia -= this.randomizar(10)

      if (this._defesa >= 100) {
        console.log('Sua defesa está no máximo')
        this._defesa = 100
      }
    }
  }

  public descansar(horas: number): void {
    if (this.estaVivo()) {
      this._energia += horas * this.randomizar(10)
    }
  }

  public batalhar(): number {
    let danoSofrido: number = this.randomizar(100)
    if (this.estaVivo()) {
      this._energia -= danoSofrido
      return danoSofrido
    } else return 0
  }

  public estaVivo(): boolean {
    return this._energia > 0
  }

  private randomizar(fator: number): number {
    return Math.random() * fator
  }
}
