/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('serviceCtrl', function($scope, $location, $http){

	$scope.steps = [
		{photo: 'img/plans/webdevelopment.png',step: 'Web Developer'},
		{photo: 'img/plans/webcounselor.png',step: 'Web Counselor'},
		{photo: 'img/plans/webdesign.png',step: 'Web Design'}
	];
	
}); 