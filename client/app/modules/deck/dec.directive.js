app.directive('deck', function () {
  return {
    templateUrl: 'app/modules/deck/deck.html',
    restrict: 'EA',
    scope: {
      channel: '@channel'
    },
    controller: DeckCtrl,
    link: function (scope, element, attrs) {
    }
  };
});


