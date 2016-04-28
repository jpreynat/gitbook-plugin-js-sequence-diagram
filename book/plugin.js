require(['gitbook', 'jQuery'], function(gitbook, $) {
  // Store sequence-diagram theme
  var userTheme = null;

  gitbook.events.on('start', function(e, config) {
    userTheme = config['js-sequence-diagram'].theme;
  });

  gitbook.events.bind('page.change', function() {
    $('code.lang-sequence').each(function(index, element) {
      var $element = $(element);
      $element.sequenceDiagram({ theme: userTheme });

      var wrapper = $('<div class="scroll"></div>');
      wrapper.html($element.html());
      $element.parent().replaceWith(wrapper);
    });
  });
});
