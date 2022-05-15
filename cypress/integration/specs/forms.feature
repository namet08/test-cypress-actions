#language: pt
  @focus
  Funcionalidade: Interagindo com formulários
    - Eu como usuário, devo ser capaz de preencher meus 
      dados pessoais nos campos do formulário

    Cenario: Criando usuário
        Dado que o usuário acessa a página de criação
        Quando ele preencher seus dados pessoais
        | nome       | ultimo_nome |       email              | endereço  | Universidade |     Profissão   | Gênero    |  Idade  |
        | ZZZZZJulio | Freire      | ZZZZZjuliotest@gmail.com | são paulo |     FMU      | Quality Analyst | Masculino | 24 yers |
        Então ele é cadastrado na plataforma

    Cenario: Visualizando um usuario na lista
        Dado que o usuário acesse a lista de usuários cadastrados
        Quando ele buscar pelo registro
        Então ele encontra seu registro na lista