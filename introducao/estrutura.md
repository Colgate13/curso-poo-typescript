# Estrutura

## Classe

Abstração do que há em comum (em termos de características em comportamentos) a um conjunto de objetos.

#### Divisão:

- Nome
- Atributos (Características)
- Métodos (Ações)

Exemplo 1:

    Mamíferos:
        Atributos:
            Data de Nascimento
            Energia
            Peso
        Métodos:
            Comer
            Mover
            Mamar

Exemplo 2:

    Empresa
        Atributos:
            Nome
            CNPJ
            Funcionários []
        Métodos
            Contratar
            Demitir
            ...

#### Deixando mais claro:

Classes são como tipos que definem a estrutura de um objeto. São como esqueletos que são usados para cria-los.

- Uma classe é como um tipo de dado como por exemplo number ou string.
- É uma estrutura que determinados dados terão.

## Objeto

O objeto por definição é uma instância de uma classe. Combina a estrutura de dados (atributos) e o comportamento dos dados (operações / métodos) em uma única entidade.

Um objeto pode ser definido como um conceito, uma abstração, algo com limites nítidos e significado em relação ao mundo.

Objetos servem como uma base real para a elaboração de um sistema consistente com a realidade modelada.

Ex: Um livro, um telefone, uma Faculdade, um Produto, um Aluno, um Professor...

#### Um Objeto é criado a partir de uma Classe

- Um Fiat Uno é uma instância da classe Carro.
- Um Livro do Guia do Mochileiro das Galáxias é uma instância da classe Livro.

Para entender melhor, um objeto é pode ser referenciado por **"um"** ou **"uma"**.

## Classe e Objeto

- Classe é o que projetamos
- Objeto é o que criamos a partir da classe
- As classes estão para objetos assim como as plantas arquitetônicas estão para as casas.

#### A Classe de um Carro:

A classe:

    Tipo: Carro
        marca
        modelo
        ano
        potência

        Métodos:
            acelerar
            trocarMarcha

Um objeto:

    Um objeto tipo: Carro
        marca: 'Fiat'
        modelo: 'Bravo'
        ano: 2014
        potencia: '110vc'

        Métodos:
            acelerar
            trocarMarcha
