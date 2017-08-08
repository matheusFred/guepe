/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('faqCtrl', function($scope, $location, $http){

  $scope.faqsteps = [
    {namestep: 'Scope', boxes: [{tittle: 'Design I',fav: 'fa-desktop',desc: '(Only desktop support)',isCollapsed: true,coll1:'Layout analysis'},
                            {tittle: 'Design II',fav: 'fa-mobile',desc: '(Support for all devices)',isCollapsed: true,coll1: 'Teste'}
    ]},
    {namestep: 'Review', boxes: [{tittle: 'Maintenance',fav: 'fa-cogs',desc: '(Improvements)',isCollapsed: true},
                            {tittle: 'Help-Desk',fav: 'fa-info',desc: '(24hrs/7)',isCollapsed: true}
    ]},
    {namestep: 'System', boxes: [{tittle: 'Differential',fav: 'fa-cog',desc: '(Your system ideia)',isCollapsed: true},
                            {tittle: 'Prototype',fav: 'fa-sticky-note-o',desc: '(Design pictures)',isCollapsed: true}
    ]},
  ];

});  