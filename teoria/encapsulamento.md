# Encapsulamento

## Encapsular

Conforme o própro nome sugere, a proposta é isolar o máximo possível as nossas classes, de forma a esconder detalhes de funcionamento interno.

Visa aumentar a flexibilidade, melhorar a manutenção e aumentar a extensibilidade do Software.

### Modificadores de Acesso

Modificadores de acesso nos permitem configurar a visibilidade dos nossos atributos, classes e métodos.

#### Moficiadores mais comuns:

- public (+)
- private (-)
- protected (#)

##### Public

Utilizada de forma restrita, apenas quando desejamos que outras classes "enxerguem" nossa classe, metodo ou atributo. Torna visível em todo o projeto.

Métodos, sempre que possível não devem ser públicos, mas normalemente são.

É a visibilidade padrão em typescript.

##### Private

Utilizado sempre que possível. Torna a visibilidade apenas local (mesmo arquivo), torna invisível para outras classes.

Atributos normalmente são privados.

Métodos que implementam rotinas internas (métodos auxiliares) devem ser privados.

##### Protected

Torna visível por classes herdadas. Utilizado, eventualmente, quando trabalhado com herança.

#### Métodos de Acesso

Método que tem como única funcionalidade prover acesso aos atributos privados os quais julgamos que devem ser acessados.

##### Características:

- Retornam o tipo do atributo que será provido o acesso.
- Não recebe parâmetros.
- Seu nome é composto pelo prefixo "get" seguido do nome do atributo que o acesso será provido.

#### Métodos Modificadores

Métodos que tem como única funcionalidade prover modificação aos atributos privados os quais julgamos que podem ser modificados por outras clsses.

##### Características:

- Não possuem retorno (tipo void).
- Recebem por parâmetro o valor a ser inserido no atributo.
- Seu nomo é composto pelo prefixo "set" seguido do nome do atributo que iremos possibilitar a modificação

#### Motivo de usar get / set

Porque nos métodos de acesso podemos controlar como a informação será retornada (no caso dos gets) e que tipo de dado será aceito para a modificação (no caso dos sets).