app.controller(
			"navbarController",
                        function($scope, $state) {
		$scope.activeLink = function(n) {
			return ($state.is(n) ? "active" : "");   
		}

});

$(".nav li a").on("click", function(){
   alert("coucou");
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});