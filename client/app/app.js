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
      $(document.body).css('zoom', ratio);
    } else {
      // Other browser that doesn't support zoom, use -moz-transform to scale and compensate for lost width
      $('#fit-wrap').css('-webkit-transform', "scale(" + ratio + ")");
      $('#fit-wrap').css('-moz-transform', "scale(" + ratio + ")");
      $('#fit-wrap').css('-ms-transform', "scale(" + ratio + ")");
      $('#fit-wrap').css('transform', "scale(" + ratio + ")");
      $('#fit-wrap').width($(window).width() / ratio + 10);
    }
  } else {
    $(document.body).css('zoom', '');
    $('#fit-wrap').css('-webkit-transform', "");
    $('#fit-wrap').css('-moz-transform', "");
    $('#fit-wrap').css('-ms-transform', "");
    $('#fit-wrap').css('transform', "");
    $('#fit-wrap').width("");
  }
}


autofit();

$(window).resize(function() {
  autofit();
});
