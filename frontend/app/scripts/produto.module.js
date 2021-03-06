(function () {
    angular.module('produtoModule', [])
        .config(function ($routeProvider) {

            $routeProvider
                .when('/produto/cadastro', {
                    templateUrl: 'sections/cadastrar-produto.html',
                    controller: 'CadastrarProdutoController',
                    controllerAs: 'CadastrarProduto'
                })
                .when('/produtos/:id', {
                    templateUrl: 'sections/editar-produto.html',
                    controller: 'EditarProdutoController',
                    controllerAs: 'EditarProduto'
                });
        });
})();