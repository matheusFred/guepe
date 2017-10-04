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
		{photo: 'img/home/draw1.png',step: 'First step:',message: 'First, we make the prototype'},
		{photo: 'img/home/draw2.png',step: 'Second step:',message: 'Then, you analyze the prototype and we develop,'},
		{photo: 'img/home/draw3.png',step: 'Third step:',message: 'Finally, your website is ready to succeed!'}
	];
	
});  