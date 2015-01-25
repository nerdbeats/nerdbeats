app.directive('deck', function () {
  return {
    templateUrl: 'app/modules/deck/deck.html',
    restrict: 'EA',
    scope: {
      channel: '@channel'
    },
    controller: DeckCtrl,
    link: function (scope, element, attrs) {
      //var el = $(element).find('.effect-slider')[0];
      //var sortable = Sortable.create(el,
      //  {
      //    onUpdate: function (/**Event*/evt) {
      //      console.log(evt)
      //    }
      //  }
      //);

      scope.moveUp = function () {
        var el = element.find('.effects-teaser-holder')
        var offset = Math.max(el.scrollLeft() + 10, el.outerWidth())
        el.scrollLeft(offset);


        var el = element.find('.effects-list')
        var offset = Math.max(el.scrollLeft() + 10, el.outerWidth())
        el.scrollLeft(offset)

      }

      scope.moveDown = function () {
        var el = element.find('.effects-teaser-holder')
        var offset = Math.min(el.scrollLeft() - 10, 0)
        el.scrollLeft(offset);

        var el = element.find('.effects-list')
        var offset = Math.min(el.scrollLeft() - 10, 0)
        el.scrollLeft(offset)
      }

    }
  };
});


