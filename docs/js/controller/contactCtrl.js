/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('contactCtrl', function($scope, $location, $http){

    $scope.initMap = function() {
      var company = {lat: 28.5821233, lng: -80.8454649};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: company
      });

      var marker = new google.maps.Marker({
        position: company,
        map: map
      });
    }; 

    $scope.initMap();
});  