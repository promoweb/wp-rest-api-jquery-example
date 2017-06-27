jQuery(document).ready(function(){

	var URL = "https://www.fx-mt4.info/wp-json/wp/v2/posts?per_page=5";

	$.ajax({
		dataType: "json",
		url: URL,
		success: success
	});

	function success(e){

		var result = "";
		var oldResult = $("#result");
		oldResult.empty();

			$.each( e, function(index, value) {
			//console.log(" I: " + index + " V: " + value.node_title);
			result += "<div class=\"art-cont\"><h2>" + value.title.rendered + "</h2>";
			result += "<img src='" + value.mediumthumb_300x200 + "' alt='" + value.title.rendered + "' />";
			result += "<article>" + value.content.rendered + "</article></div>";

		$('#result').html(result);

		});

    // enter keyd
    jQuery(document).bind('keypress', function(e) {
      if(e.keyCode==13){
          $('#search').trigger('click');
        }
    });

	$('#search').click(function(){

		var searchContent = $("#searchContent").val();

		if (searchContent.length > 2){
			var URL = "https://www.fx-mt4.info/wp-json/wp/v2/posts?search=" + searchContent;
		} else {
			var URL = "https://www.fx-mt4.info/wp-json/wp/v2/posts?per_page=5";
		}

		$.ajax({
			dataType: "json",
			url: URL,
			success: success
		});

		function success(e){

			var result = "";
			var oldResult = $("#result");
			oldResult.empty();

				$.each( e, function(index, value) {
				//console.log(" I: " + index + " V: " + value.node_title);
				result += "<h2>" + value.title.rendered + "</h2>";
				result += "<img src='" + value.mediumthumb_300x200 + "' alt='" + value.title.rendered + "' />";
				result += "<article>" + value.content.rendered + "</article>";

			$('#result').html(result);

			});

		}

		});

	};

});
