/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/*   
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: "",
      views: {
        'Home': { templateUrl: '/home.html', controller: 'homeCtrl'},
        'Mission': { templateUrl: '/mission.html'},
        'Contact': { templateUrl: '/contact.html', controller: 'contactCtrl'},
        'Footer':{ templateUrl: '/footer.html'}
      }
    }) 
    .state('home', {
      url: "/home",
      views: {
        'Home': { templateUrl: '/home.html', controller: 'homeCtrl'},
        'Mission': { templateUrl: '/mission.html'},
        'Contact': { templateUrl: '/contact.html', controller: 'contactCtrl'},
        'Footer':{ templateUrl: '/footer.html'}
      }
    })  
    .state('services', {
      url: "/services",
      views: {
        'Services': { templateUrl: '/services.html', controller: 'serviceCtrl'},
        'Plans': { templateUrl: '/plans.html', controller: 'plansCtrl'},
        'Contact': { templateUrl: '/contact.html',controller: 'contactCtrl'},
        'Footer':{ templateUrl: '/footer.html'}
      }
    })
    .state('about', {
      url: "/about",
      views: {
        'About': { templateUrl: '/about.html'},
        'Clients': { templateUrl: '/clients.html'},
        'Contact': { templateUrl: '/contact.html',controller: 'contactCtrl'},
        'Footer':{ templateUrl: '/footer.html'}
      }
    })   
});