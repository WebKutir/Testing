// JavaScript Document
$(function () {
  $('.trash').click(function(){
	  var answer = confirm('Are you sure?');
	  if(answer==true)
	  {
		$(this).parent().hide("slide", { direction: "left" }, 1000);
	  }
  });
});