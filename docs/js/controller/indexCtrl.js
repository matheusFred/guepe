/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $location, $http){
 	
 	$scope.btnMobile = false;

	$scope.scrollContact = function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        })		
	};

	$scope.scrollTop = function(){
	    $('html, body').animate({
	        scrollTop: $("#navbar").offset().top
	    })		
	};


});