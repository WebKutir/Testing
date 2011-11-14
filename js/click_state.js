// JavaScript Document
$(document).ready(function() {
  $('li').click(function(e){
	 $('*').removeClass('drag_active');
	 $('*').children('a').css('color', '#000');
	 $('*').children('a').css('background', '-webkit-gradient(linear, 0% 0%, 0% 100%, from(#FCFCFC), to(#E8E8E8))');
	 $('*').children('a').css('background', '-webkit-linear-gradient(top, #FCFCFC, #E8E8E8)');
	 $('*').children('a').css('background', '-moz-linear-gradient(top, #FCFCFC, #E8E8E8)');
	 $('*').children('a').css('background', '-ms-linear-gradient(top, #FCFCFC, #E8E8E8)');
	 $('*').children('a').css('background', '-o-linear-gradient(top, #FCFCFC, #E8E8E8)');
	 
	 $(this).children('.drag').addClass('drag_active');
	 $(this).children('a').css('color', '#FFFFFF');
	 $(this).children('a').css('background', '-webkit-gradient(linear, 0% 0%, 0% 100%, from(#C0C0C0), to(#000000))');
	 $(this).children('a').css('background', '-webkit-linear-gradient(top, #C0C0C0, #000000)');
	 $(this).children('a').css('background', '-moz-linear-gradient(top, #C0C0C0, #000000)');
	 $(this).children('a').css('background', '-ms-linear-gradient(top, #C0C0C0, #000000)');
	 $(this).children('a').css('background', '-o-linear-gradient(top, #C0C0C0, #000000)');
  });
});