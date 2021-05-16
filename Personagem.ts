export default class Personagem {
  constructor(
    public nome: string,
    public vida: number,
    public energia: number,
    public ataque: number,
    public defesa: number
  ) {}

  // Toda vez que pensar em ler dados na classe, use os parâmetros
  // Toda vez que pensar em imprimir algo, use retorno.

  public mostrarAtributos(): string {
    return `\n+=[ Atributos do Guerreiro: \n|   Nome: ${
      this.nome
    } \n|   Vida: ${this.vida.toFixed(1)} \n|   Energia: ${this.energia.toFixed(
      1
    )} \n|   Ataque: ${this.ataque.toFixed(
      1
    )} \n|   Defesa: ${this.defesa.toFixed(1)} \n`
  }

  public treinarAtaque(): void {
    if (this.estaVivo()) {
      this.ataque += Math.random() * 7
      this.energia -= Math.random() * 10
    }
  }

  public treinarDefesa(): void {
    if (this.estaVivo()) {
      this.defesa += Math.random() * 5
      this.energia -= Math.random() * 10

      if (this.defesa >= 100) {
        console.log('Sua defesa está no máximo')
        this.defesa = 100
      }
    }
  }

  public descansar(horas: number): void {
    if (this.estaVivo()) {
      this.energia += horas * (Math.random() * 10)
    }
  }

  public batalhar(): number {
    let danoSofrido: number = Math.random() * 100
    if (this.estaVivo()) {
      this.energia -= danoSofrido
      return danoSofrido
    } else return 0
  }

  public estaVivo(): boolean {
    return this.energia > 0
  }
}
