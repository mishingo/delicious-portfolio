$(document).pjax('a', '#container');

$(function() {
  $('.feed-btn').click(function() {
    $('#mobile-feed').fadeToggle();
  })

  $('#x').click(function() {
    $('#mobile-feed').fadeToggle();
  })
  
})