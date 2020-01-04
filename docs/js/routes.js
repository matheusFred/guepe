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
        'Home': { templateUrl: 'pags/home.html', controller: 'homeCtrl'},
        'Mission': { templateUrl: 'pags/mission.html'},
        'Contact': { templateUrl: 'pags/contact.html', controller: 'contactCtrl'},
        'Footer':{ templateUrl: 'pags/footer.html'}
      }
    }) 
    .state('home', {
      url: "/home",
      views: {
        'Home': { templateUrl: 'pags/home.html', controller: 'homeCtrl'},
        'Mission': { templateUrl: 'pags/mission.html'},
        'Contact': { templateUrl: 'pags/contact.html', controller: 'contactCtrl'},
        'Footer':{ templateUrl: 'pags/footer.html'}
      }
    })  
    .state('services', {
      url: "/services",
      views: {
        'Plans': { templateUrl: 'pags/plans.html', controller: 'plansCtrl'},
        // 'Partner': { templateUrl: 'pags/partner.html', controller:'partnerCtrl'},
        'Contact': { templateUrl: 'pags/contact.html',controller: 'contactCtrl'},
        'Footer':{ templateUrl: 'pags/footer.html'}
      }
    })
    .state('about', {
      url: "/about",
      views: {
        'About': { templateUrl: 'pags/about.html'},
        'Contact': { templateUrl: 'pags/contact.html',controller: 'contactCtrl'},
        'Footer':{ templateUrl: 'pags/footer.html'}
      }
    })   
});