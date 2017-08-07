/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('plansCtrl', function($scope){

	$scope.prices = [
	    {name:'Plan Basic', value:" 200", details: [{name: "Design I",option: 1},
	    										   {name: "Design II",option: 0},
	    										   {name: "Maintenance",option: 3, number: "3"},
	    										   {name: "Helpdesk", option: 0},
	    										   {name: "Systems",option: 3, number: "0"}
	    ]},
	    {name:'Plan Dynamic', value:" 400", details: [{name: "Design I",option: 1},
	    										   {name: "Design II",option: 1},
	    										   {name: "Maintenance",option: 3, number: "5"},
	    										   {name: "Helpdesk", option: 0},
	    										   {name: "Systems",option: 3, number: "0"}
	    ]},
	    {name:'Plan Ultra', value:" 600", details: [{name: "Design I",option: 1},
	    										   {name: "Design II",option: 1},
	    										   {name: "Maintenance",option: 3, number: "7"},
	    										   {name: "Helpdesk", option: 1},
	    										   {name: "Systems",option: 3, number: "1"}
	    ]},
    ];

});    