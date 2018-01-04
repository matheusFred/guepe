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
		{photo: 'img/home/draw1.png',step: 'First step:'
									,stepbr: 'Primeiro passo:'

									,message: 'We make the prototype based on customer request,'
									,messagebr: 'Fazemos o protótipo com base no pedido do cliente,'
		},
		{photo: 'img/home/draw2.png',step: 'Second step:'
									,stepbr: 'Segundo passo:'

									,message: 'Prototype ready we can move to develop phase,'
									,messagebr: 'Protótipo analisado começamos os desenvolvimentos,'
		},
		{photo: 'img/home/draw3.png',step: 'Third step:'
									,stepbr: 'Terceiro passo:'

									,message: 'Your website get you online ready for business!'
									,messagebr: 'Seu site está pronto para seus negócios!'
		}
	];

	
});  