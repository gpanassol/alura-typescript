const controller = new NegociacaoController();
// Adiciona no submit do form o controller
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
