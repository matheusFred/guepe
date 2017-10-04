/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $location, $http){
	$scope.contact = function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        })		
	};
});