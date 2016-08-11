(function() {
    'use strict';

    angular.module('module', ['ui.router'])

        .config(function($stateProvider, $urlRouterProvider)
        {
            $stateProvider.state('home', {
                    url: "/home",
                    templateUrl: "components/home.html",
                    controller: "homeController as home"
                })

            $urlRouterProvider.otherwise('home')
        })

        
        // .controller('ControllerController', ControllerController);
        
        //     function ControllerController() {
        //         var vm = this;
        //         console.log("Controller Call");
        //     }


})();