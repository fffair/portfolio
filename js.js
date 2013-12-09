
/* Initialize masonry */
$(document).ready(function() {

    var $container = $('#container');
    $container.imagesLoaded( function() {
        $container.masonry({
 			 columnWidth: 200,
  			 itemSelector: '.item'
		});
    });


/* Change Url when content is loaded */					   
	var hash = window.location.hash.substr(1);
	var href = $('#nav li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}											
	});
	
	

	$('#nav li a').click(function(){
								  
		var toLoad = $(this).attr('href')+' #content';
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		
		
		
		/* LOAD the content in div#content */
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent)
		}
		
		/* SHOW the content in div#content */
		function showNewContent() {
		
		
		$('#content').show('fast',hideLoader);

			/* imagesLoaded plugin  */
    		$container.imagesLoaded( function() {
    		/* Initialize again the masonry  */
       			$container.masonry({
 					columnWidth: 200,
  			 		itemSelector: '.item'
				});
   			});
		
			
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	});

});