  gitbook.events.bind("page.change", function() {
require(['gitbook', 'jQuery'], function(gitbook, $) {
    $('code.lang-sequence').each(function(index, element) {
      var $element = $(element);
      $element.sequenceDiagram({theme: 'simple'});

      var wrapper = $("<div class='scroll'></div>");
      wrapper.html($element.html());
      $element.parent().replaceWith(wrapper);
    });
  });
});
