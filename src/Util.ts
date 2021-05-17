// Métodos estáticos podem ser importados sem a necessidade de criar um objeto.
export class Util {
  static randomizar(inicio: number, fim: number): number {
    return inicio + Math.random() * (fim - inicio)
  }
}
