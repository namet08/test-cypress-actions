class formPage {

    accessForms() {
        cy.visit('/treinamento/home');
        cy.get('a[class="collapsible-header "]').click();
    }

    accessCreation() {
        cy.get('a[href="/users/new"]').click();
    }

    emailPassw(nome, ultimo_nome, email, endereço, universidade, profissão, gênero, idade) {
        cy.get('input[id="user_name"]').type(nome);
        cy.get('input[id="user_lastname"]').type(ultimo_nome);
        cy.get('input[id="user_email"]').type(email);
        cy.get('input[id="user_address"]').type(endereço);
        cy.get('input[id="user_university"]').type(universidade);
        cy.get('input[id="user_profile"]').type(profissão);
        cy.get('input[id="user_gender"]').type(gênero);
        cy.get('input[id="user_age"]').type(idade);
    }

    creatingAccount() {
        cy.get('input[type="submit"]').click();
    }

    accessUser() {
        cy.get('a[href="/users"]').click();
    }

    searchMyRecord() {
        cy.get('span[class="last"]').click();
    }
}

module.exports = new formPage();