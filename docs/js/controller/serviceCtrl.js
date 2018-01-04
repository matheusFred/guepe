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
		{photo: 'img/plans/developer.png'
											,step: 'Web Developer'
											,stepbr: 'Dev. Web'
		},
		{photo: 'img/plans/counselor.png'
											,step: 'Web Counselor'
											,stepbr: 'Aconselhador Web'
		},
		{photo: 'img/plans/design.png'
											,step: 'Web Design'
											,stepbr: 'Design Web'
		},
		{photo: 'img/plans/mobile.png'
											,step: 'Mobile Developer'
											,stepbr: 'Dev. Mobile'
		},
		{photo: 'img/plans/seo.png'
											,step: 'Digital Marketing'
											,stepbr: 'Marketing Digital'
		},
		{photo: 'img/plans/photography.png'
											,step: 'Photography'
											,stepbr: 'Photografos'
		}				
	];
	
}); 