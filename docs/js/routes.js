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
        'Plans': { templateUrl: '/plans.html', controller: 'plansCtrl'},
        'Contact': { templateUrl: '/contact.html', controller: 'contactCtrl'},
        'Footer':{ templateUrl: '/footer.html'}
      }
    }) 
    .state('home', {
      url: "/home",
      views: {
        'Home': { templateUrl: '/home.html', controller: 'homeCtrl'},
        'Plans': { templateUrl: '/plans.html', controller: 'plansCtrl'},
        'Contact': { templateUrl: '/contact.html', controller: 'contactCtrl'},
        'Footer':{ templateUrl: '/footer.html'}
      }
    })    
    .state('faq', {
      url: "/faq",
      views: {
        'About': { templateUrl: '/about.html'},
        'Faq': { templateUrl: '/faq.html',controller: 'faqCtrl'},
        'Contact': { templateUrl: '/contact.html',controller: 'contactCtrl'},
        'Footer':{ templateUrl: '/footer.html'}
      }
    }) 
});