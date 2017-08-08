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
		{photo: 'img/draw1.png',step: 'First step:',message: 'First you need to send us your idea to make the design, or if you prefer we can draw!'},
		{photo: 'img/draw2.png',step: 'Second step:',message: 'Then you analyze your website, or you can change everything!'},
		{photo: 'img/draw3.png',step: 'Third step:',message: 'Finally your website is ready for a new direction in your business!'}
	];
	
});  