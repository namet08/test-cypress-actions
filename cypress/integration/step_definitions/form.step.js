import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import formPage from "../../pages/form.page";

Given("que o usuário acessa a página de criação", () => {
    formPage.accessForms();
    formPage.accessCreation();
});

When("ele preencher seus dados pessoais", (datatable) => {
    datatable.hashes().forEach(element => {
        formPage.emailPassw(element.nome, element.ultimo_nome, element.email, element.endereço,
            element.Universidade, element.Profissão, element.Gênero, element.Idade);
    });
});

Then("ele é cadastrado na plataforma", () => {
    formPage.creatingAccount();
    cy.get('#notice')
        .should('have.text', 'Usuário Criado com sucesso');
});

Given("que o usuário acesse a lista de usuários cadastrados", () => {
    formPage.accessForms();
    formPage.accessUser();
});

When("ele buscar pelo registro", () => {
    formPage.searchMyRecord();
});

Then("ele encontra seu registro na lista", () => {
    cy.contains('Quality Analyst');
});