import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import searchElementsPage from "../../pages/searchElements.pages";

Given("que o usuário acesse a página de links", () => {
    searchElementsPage.acessPageSearchElements();
    searchElementsPage.accessLink();
});

When("ele interagir com qualquer um dos mesmos", () => {
    searchElementsPage.clickInLinks();
});

Then("ele visualiza o retorno do link em que clicou", () => {
    searchElementsPage.viewLinksPage();
});

Given("que o usuario acesse a pagina de Inputs e TextField", () => {
    searchElementsPage.acessPageSearchElements();
    searchElementsPage.acessInputsAndTextField();
});

Then("ele quando ele preencher valores nos campos", (datatable) => {
    datatable.hashes().forEach(element => {
        searchElementsPage.iFillInValue(element.First_name,element.Last_name, 
            element.Password, element.email, element.Textarea);
    });
});

When("ele consegue interagir com componentes", () => {
    searchElementsPage.interactsWithComponents();
});

Given("que o usuario acesse a pagina de Botões", () => {
    searchElementsPage.acessPageSearchElements();
    searchElementsPage.acessButtons();
});

Then("eu clicar nos mesmos", () => {
    searchElementsPage.clickTheButtons();
});

When("ele consegue interagir com os elementos na tela", () => {
    searchElementsPage.interactsWithButtons();
});