#language:pt

    Funcionalidade: Procurando por elementos
        - Eu como usuario devo ser capaz de interagir com todos os tipos de elementos do site
        
        Cenario: acessando links
            Dado que o usuário acesse a página de links
            Quando ele interagir com qualquer um dos mesmos
            Então ele visualiza o retorno do link em que clicou

        Cenario: Interagindo com Inputs e TextField
            Dado que o usuario acesse a pagina de Inputs e TextField
            Quando ele quando ele preencher valores nos campos
            | First_name | Last_name | Password |       email          | Textarea |   
            |  Tester    |    QA     | senha123 | testeemail@gmail.com | texto 1  | 
            Então ele consegue interagir com componentes

        Cenario: Botões
            Dado que o usuario acesse a pagina de Botões
            Quando eu clicar nos mesmos
            Então ele consegue interagir com os elementos na tela