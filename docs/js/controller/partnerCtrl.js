/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('partnerCtrl', function($scope, $location, $http){
  $scope.carouselPartner= function(){
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:2500,
          responsive:{
            1200:{
              items:5
            },
            1024:{
              items:5
            },
            768:{
              items:5
            },
            425:{
              items:3
            },
            375:{
              items:3
            },
            320:{
              items:3
            }
          }
      })
    });
  };

  $scope.carouselPartner();
});    