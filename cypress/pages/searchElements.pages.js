var data = require("../constants/massConst");

class searchElementsPage {

    acessPageSearchElements() {
        cy.visit('/treinamento/home');
        cy.contains('a', 'Busca de elementos')
            .click();
    }

    accessLink() {
        cy.get('a[href="/buscaelementos/links"]').click();
    }

    clickInLinks() {
        cy.get('a[href="/buscaelementos/success"]').click();
        cy.get('h5[class="red-text text-darken-1 center"]').contains(data.msg.menssageSucess);
        cy.get('a[class="btn waves-light red"]').click();
        cy.get('a[href="/buscaelementos/badrequest"]').click();
        cy.get('h5[class="red-text text-darken-1 center"]').contains(data.msg.menssageBadRequest);
        cy.get('a[class="btn waves-light red"]').click();
        cy.get('a[href="/buscaelementos/notfound"]').click();
        cy.get('h5[class="red-text text-darken-1 center"]').contains(data.msg.messageError);
        cy.get('a[class="btn red"]').click();
    }

    viewLinksPage() {
        cy.get('a[href="/buscaelementos/internalservererror"]').click();
        cy.get('h5[class="red-text text-darken-1 center"').contains(data.msg.iternalError);
    }

    acessInputsAndTextField() {
        cy.get('a[href="/buscaelementos/inputsetextfield"]').click();
    }

    iFillInValue(first_name, last_name, password, email, textarea) {
        cy.get('input[id="first_name"]').type(first_name);
        cy.get('input[id="last_name"]').type(last_name);
        cy.get('input[id="password"]').type(password);
        cy.get('input[id="email"]').type(email);
        cy.get('textarea[id="textarea1"]').type(textarea);
    }

    interactsWithComponents() {
        cy.get('h5').contains(data.msg.messageTypeInput);
    }

    acessButtons() {
        cy.get('a[href="/buscaelementos/botoes"]').click();
    }

    clickTheButtons() {
        cy.get( 'h5').contains(data.msg.buttons).get('a[id="teste"]').click();
        cy.contains('div[id="div1"]', data.msg.messageYouClick)
            .get('i[class="material-icons"]').click();
        cy.contains('div[id="div2"]', data.msg.messageYouClick)
            .get('a[class="waves-teal btn-flat"]').click();
        cy.contains('div[id="div3"]', data.msg.messageYouClick)
            .get('button[type="submit"]').click();
    }

    interactsWithButtons() {
        cy.contains('div[id="div4"]', 'Você Clicou no Botão!')
            .get('div[class="row"]');
    }
}

module.exports = new searchElementsPage();