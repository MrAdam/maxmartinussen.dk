$(function() {

  $("#link_about").on('click', function() {
    event.preventDefault();
    $("#about").show();
    $("#link_about").find('span').show();
  });

});
