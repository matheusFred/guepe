/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('homeCtrl', function($scope, $location, $http){

	$scope.steps = [
		{photo: 'img/home/draw1.png',step: 'First step:',message: 'We make the prototype based on customer request,'},
		{photo: 'img/home/draw2.png',step: 'Second step:',message: 'Prototype ready we can move to develop phase,'},
		{photo: 'img/home/draw3.png',step: 'Third step:',message: 'Your website get you online ready for business!'}
	];
	
});  