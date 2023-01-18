/* lazy load function */

$(function () {
    $("img.lazy").lazyload();
});


$('#showMore').click(function() {
    $('.box:hidden').slice(0,3).slideDown();
    if ($(".box:hidden").length == 0) {
       $("#showMore").fadeOut('slow');
     }
   });