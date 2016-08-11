(function() {
'use strict';

    angular.module('module')
        .controller('homeController', homeControllerFunc);

    //ControllerController.$inject = ['dependency1'];

    function homeControllerFunc() {
        var vm = this;
        
        console.log("Home Controller Initilize");
    }
})();