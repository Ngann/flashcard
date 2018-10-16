$(document).ready(function() {
  $(".flashcard").click(function() {
    $(this).children("p").slideToggle();
    $(this).toggleClass("flashcard-clicked");
  });
});

//   $(".concept").click(function() {
//     $(this.nextElementSibling).toggle()
//   });
// });

// $(document).ready(function() {
//   $(".first-row .concept").click(function() {
//     $(this.nextElementSibling).toggle();
//   });
  // $(".second-row .concept").click(function() {
  //   var answer = this.nextElementSibling;
  //   var concept = this;
  //   $(answer).fadeToggle();
  //   $(concept).remove();
  //   $(answer).click(function(){
  //     $(answer).before(concept);
  //     $(answer).remove();
  // });

  // $(".fourth-row .flashcard").click(function() {
  //   var answer = $(this).children("p");
  //   alert(answer);
  // });

//   $(".fifth-row .flashcard").click(function() {
//     $(this).children("h2").toggle();
//     $(this).children("p").toggle();
//   });
// });
