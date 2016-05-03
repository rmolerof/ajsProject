require.config({
	  map:{

	  },
	  paths:{
		  'angular': '../js/angular-1.4.5/angular',
		  'app': 'app',
		  'coreModule': 'coreModule',
		  'jquery': '../js/jquery/jquery-2.2.3'
	  },
	  shim:{
		  'app': {
			  deps: ['angular', 'jquery', 'coreModule']
		  },
		  'coreModule': {
			  deps: ['angular']
		  }
	  }
});

require(['app'], function(){
	angular.bootstrap(document, ['app']);
});

define(['jquery'], function($) {
	$('.message a').click(function() {
		$('form').animate({height : "toggle", opacity : "toggle"}, "slow");
	});
});
