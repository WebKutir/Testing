// JavaScript Document
$(function () {
  $('.tab').click(function(e){
	 $('*').removeClass('tab_active');
	 $(this).addClass('tab_active');
  });
});