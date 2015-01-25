app.directive('deck', function () {
  return {
    templateUrl: 'app/modules/deck/deck.html',
    restrict: 'EA',
    scope: {
      channel: '@channel'
    },
    controller: DeckCtrl,
    link: function (scope, element, attrs) {
      var el = $(element).find('.effect-slider')[0];
      var sortable = Sortable.create(el,
        {
          onUpdate: function (/**Event*/evt) {
            console.log(evt)
          }
        }
      );
    }
  };
});


