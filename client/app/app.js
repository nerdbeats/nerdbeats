'use strict';

window.app = angular.module('nerdBeats', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.bootstrap-slider',
  'angular-velocity'
]);

window.app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });






  var autofit = function() {
  // initial fixed width
  var minW = 1920;

  if ($(window).width() < minW) {
    var ratio = $(window).width() / minW;

    // For chrome and safari, use zoom
    var detect = navigator.userAgent.toLowerCase();
    if((detect.indexOf('chrome') + 1) || (detect.indexOf('safari') + 1)) {
      //$(document.body).css('zoom', ratio);
      $('.shell').css('-webkit-transform', "scale(" + ratio + ")");
      $('.shell').css('-moz-transform', "scale(" + ratio + ")");
      $('.shell').css('-ms-transform', "scale(" + ratio + ")");
      $('.shell').css('transform', "scale(" + ratio + ")");
      $('.shell').width($(window).width() / ratio + 10);
    } else {
      // Other browser that doesn't support zoom, use -moz-transform to scale and compensate for lost width
      $('.shell').css('-webkit-transform', "scale(" + ratio + ")");
      $('.shell').css('-moz-transform', "scale(" + ratio + ")");
      $('.shell').css('-ms-transform', "scale(" + ratio + ")");
      $('.shell').css('transform', "scale(" + ratio + ")");
      $('.shell').width($(window).width() / ratio + 10);
    }
  } else {
    $(document.body).css('zoom', '');
    $('.shell').css('-webkit-transform', "");
    $('.shell').css('-moz-transform', "");
    $('.shell').css('-ms-transform', "");
    $('.shell').css('transform', "");
    $('.shell').width("");
  }
}


autofit();

$(window).resize(function() {
  autofit();
});
