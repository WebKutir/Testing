// JavaScript Document
  $(function () {
	 $('#filter_text_image').hide();
	  
	  $('#filter_text').keyup(function(e){
		  var target = $(this);
		  if(target.val()!='')
		  {
			 $('li').children('a').each(function(index){
				$(this).parent().show();
				var text = $(this).text();
				var rexp = new RegExp($('#filter_text').val(), "gi");
				if(!rexp.test(text))
				{
					$(this).parent().hide();
				}
			 });
			 $('#filter_text_image').show();
		  }
		  else
		  {
			 clear_filter_text();
		  }
	  });

	  function clear_filter_text() {
		 $('li').children('a').each(function(index){
			$(this).parent().show();
		 });
		 $('#filter_text').val('');
		 $('#filter_text_image').hide();
	  }
	  
	  $('#filter_text_image').click(function(e){
		  clear_filter_text();
	  });
  });