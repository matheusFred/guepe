/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/*   
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/index');

  $stateProvider
    .state('index', {
      url: "/index",
      views: {
        'Home': { templateUrl: '../templates/home.html'},
        'Plans': { templateUrl: '../templates/plans.html'},
        'Contact': { templateUrl: '../templates/contact.html'},
        'Footer':{ templateUrl: '../templates/footer.html'}
      }
    })    
    .state('faq', {
      url: "/faq",
      views: {
        'Faq': { templateUrl: '../templates/faq.html'},
        'Contact': { templateUrl: '../templates/contact.html'},
        'Footer':{ templateUrl: '../templates/footer.html'}
      }
    }) 
});