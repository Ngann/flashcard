// $(document).ready(function() {
//   $(".concept").click(function() {
//     $(this.nextElementSibling).toggle()
//   });
// });

$(document).ready(function() {
  $(".first-row .concept").click(function() {
    $(this.nextElementSibling).toggle();
  });
  $(".second-row .concept").click(function() {
    var answer = this.nextElementSibling;
    var concept = this;
    $(answer).fadeToggle();
    $(concept).remove();
    $(answer).click(function(){
      $(answer).before(concept);
      $(answer).remove();
    });
  });
  $(".third-row .concept").click(function() {
    var answer = this.nextElementSibling;
    var concept = this;
    $(answer).slideToggle();
    $(".third-row .flashcard").addClass("flashcard-clicked");
  });
  $(".fourth-row .concept").click(function() {
    var answer = (this).children("p");
    alert(answer);
  });
  $(".fifth-row .flashcard").click(function() {
    $(this).children("h2").toggle();
    $(this).children("p").toggle();
  });
});
