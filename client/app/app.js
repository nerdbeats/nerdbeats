window.app = angular.module('nerdBeats', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.bootstrap-slider',
  'LocalStorageModule'
]);

window.app.config(function ($routeProvider, $locationProvider, localStorageServiceProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
    localStorageServiceProvider.setPrefix('nerdBeats');
  });
