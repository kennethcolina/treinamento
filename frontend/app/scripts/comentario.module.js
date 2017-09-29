(function () {

    'use strict';

    angular.module('comentarioModule', [])
        .config(function ($routeProvider) {

            $routeProvider
                .when('/comentarios', {
                    templateUrl: 'sections/comentarios.html',
                    controller: 'ComentariosController',
                    controllerAs: 'Comentarios'
                })
                .when('/comentarios/produtos/:id/', {
                    templateUrl: 'sections/produto-comentarios.html',
                    controller: 'ProdutoComentariosController',
                    controllerAs: 'ProdutoComentarios'
                });
        });
}());