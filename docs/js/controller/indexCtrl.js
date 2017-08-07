/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope){

	$scope.contact = function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        })		
	};

	$scope.home = function(){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        })		
	};


});