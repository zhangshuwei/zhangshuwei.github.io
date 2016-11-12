var app = angular.module('myWeb', [
    // external dependencies
    'ui.router'
    ]);

app.config( function( $stateProvider, $urlRouterProvider ) {
                $urlRouterProvider.otherwise('/');
		$stateProvider
	  		.state('home', {
	            url: '/',
	            views:{
	                'nav-top' : {
	                    templateUrl: 'views/navbar/navbar.top.view.html',
						controller:'navbarController'
	                },
	                'content' : {
	                    templateUrl: 'views/home.view.html'
	                }
	            }
	        })

		$stateProvider
	  		.state('aboutme', {
	            url: '/aboutme',
	            views:{
	                'nav-top' : {
	                     templateUrl: 'views/navbar/navbar.top.view.html',
						controller:'navbarController'
	                },
					'jumbotron':{
						templateUrl: 'views/jumbotron.aboutme.view.html'
					},
	                'content' : {
	                    templateUrl: 'views/aboutMe.view.html',
	                    
	                }
	            }
	        })
}
		   );