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

  $stateProvider
    .state('index', {
      url: "",
      views: {
        'Home': { template: '<section class="col-md-12 col-sm-12 col-xs-12 pagebox-home nopadding"><div class="container"><div class="row"><div class="col-md-12 col-sm-12 col-xs-12 home-steps"><div class="col-md-4 col-sm-4 col-xs-12" ng-repeat="step in steps"><img src="{{step.photo}}" alt="Hot home image"><h3>{{step.step}}</h3><p>{{step.message}}</p></div></div></div> <!-- Fecha row --></div> <!-- Fecha container --><div class="col-md-12 col-sm-12 col-xs-12 nopadding"><div class="col-md-6 col-sm-6 col-xs-6 fixerseta"></div><div class="col-md-6 col-sm-6 col-xs-6 fixerseta1"></div></div></section>',
        controller: 'homeCtrl'},
        // 'Plans': { templateUrl: '../templates/plans.html', controller: 'plansCtrl'},
        // 'Contact': { templateUrl: '../templates/contact.html', controller: 'contactCtrl'},
        // 'Footer':{ templateUrl: '../templates/footer.html'}
      }
    }) 
    // .state('home', {
    //   url: "/home",
    //   views: {
    //     'Home': { templateUrl: '../templates/home.html', controller: 'homeCtrl'},
    //     'Plans': { templateUrl: '../templates/plans.html', controller: 'plansCtrl'},
    //     'Contact': { templateUrl: '../templates/contact.html', controller: 'contactCtrl'},
    //     'Footer':{ templateUrl: '../templates/footer.html'}
    //   }
    // })    
    // .state('faq', {
    //   url: "/faq",
    //   views: {
    //     'Faq': { templateUrl: '../templates/faq.html',controller: 'faqCtrl'},
    //     'Contact': { templateUrl: '../templates/contact.html',controller: 'contactCtrl'},
    //     'Footer':{ templateUrl: '../templates/footer.html'}
    //   }
    // }) 
});