require(["gitbook"], function(gitbook) {
  gitbook.events.bind("page.change", function() {
    element = $('code.lang-sequence');
    element.sequenceDiagram({theme: 'simple'});
    element.parent().replaceWith(element.html());
  });
});