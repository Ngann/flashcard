$(document).ready(function() {
  // $(".hi").click(function() {
  //   $("ul.message").append("<li>First list item</li>");
  //   $("li").click(function() {
  //     $(this).remove();
  //   });
  // });
  // $(".image").click(function() {
  //   $("h2").before("<img src='img/smiley.jpg'>");
  //   $("img").click(function() {
  //     $(this).remove();
  //   });
  // });
  //
  // $(".what").click(function(){
  //   $("ul.when").append("<li>1 pm </li>");
  // });
  //
  // $(".who").click(function(){
  //   $("ul.when").after("<li>You</li>");
  // });
  $(".cat").click(function() {
    $("h2.cat-speak").after("<p>Meow!</p>");
    $("h2.dog-speak").after("<p>Bark!</p>");
  });
  $(".dog").click(function() {
    $("h2.cat-speak").after("<p>Meow!</p>");
    $("h2.dog-speak").after("<p>Bark!</p>");
  });

  $(".face").click(function(){
    $("h2.face").before("<img src='img/smiley.jpg'>");
    $("img").click(function(){
      $(this).remove();

    });
  });

});
