$(function() {

  $('.nav>li>a').on('click', function() {
    event.preventDefault();

    $('.nav>li').removeClass('active'); // Remove active button indicator
    $('.panel-body>div').hide(); // Hide all content
    $('.panel').show(); // Show content container

    var content = $(this).attr('href'); // Get target content
    $(content).show(); // Show target content
    $(this).parent().addClass('active'); // Add active button indicator
  });

});
