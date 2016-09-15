$(document).ready(function() {
	$(".dropdown").on("show.bs.dropdown", function(event){
        $(".carousel-caption").hide();
    });

    $(".dropdown").on("hide.bs.dropdown", function(event){
        $(".carousel-caption").show();
    });
});