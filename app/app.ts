import { NegociacaoController } from "./controllers/negociacao-contoller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if(form) {
    
form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error ('Não foi possível inicializar a aplicação, Verifique se o form existe')
}
/* 
const negociacoesView = new NegociacoesView
const template = negociacoesView.template();
console.log(template); */
