/* ****************************************************** */
/*
/* Angular app comunication aplication.
/* 
/* Var @var myVariableApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
var moduleApp = angular.module('guepeApp', ['ui.router', 'ui.bootstrap']);

moduleApp.directive("footer", function($templateRequest, $compile){
  return {
    link: function(scope, element, attrs){
      $templateRequest("../templates/footer.html").then(function(html){
        element.append($compile(html)(scope));
      });
    }
  };
});