moduleApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.preferredLanguage('br');
  $translateProvider.useSanitizeValueStrategy('sceParameters');
}]);

moduleApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
}]);
