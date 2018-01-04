/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('plansCtrl', function($scope, $location, $http){

	$scope.prices = [
	    {name:'Plan Basic', namebr:'Plano Básico', value:" 400", details: [{name: "Mobile Suport",option: 0},	    										
	    										   {name: "Guide", option: 0},	    										   
	    										   {name: "Maintenance",option: 2, number: "3"},
	    										   {name: "Helpdesk", option: 2, number: "12h"},
	    										   {name: "Free Host", option: 0},
	    										   {name: "Google Analytics", option: 0}
	    ]},
	    {name:'Plan Dynamic', namebr:'Plano Dinâmico', value:" 600", details: [{name: "Mobile Suport",option: 1},
	    										   {name: "Guide", option: 1},
	    										   {name: "Maintenance",option: 2, number: "5"},
	    										   {name: "Helpdesk", option: 2, number: "24h"},
	    										   {name: "Free Host", option: 1},
	    										   {name: "Google Analytics", option: 0}
	    ]},
	    {name:'Plan Ultra', namebr:'Plano Ultra', value:" 800", details: [{name: "Mobile Suport",option: 1},
	    										   {name: "Guide", option: 1},
	    										   {name: "Maintenance",option: 2, number: "7"},
	    										   {name: "Helpdesk", option: 2, number: "24h"},
	    										   {name: "Free Host", option: 1},
	    										   {name: "Google Analytics", option: 1}
	    ]},
    ];

});    