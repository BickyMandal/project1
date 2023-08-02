$(document).ready(function(){
 $('#menu').click(function(){
   $(this).toggleClass('fa-times');
   $(".nav-section").toggleClass("toggle");
   $("body").toggleClass("");
 });
});
