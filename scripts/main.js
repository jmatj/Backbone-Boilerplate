require.config({
	paths : {
		jquery : '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min',
		underscore : '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min',
		backbone : '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min'
	},
	shim : {
		underscore : {
			exports : '_'
		},
		jquery : {
			exports : 'jQuery'
		},
		backbone : {
			deps : [ "underscore", "jquery" ],
			exports : "Backbone"
		}
	}

});

require([
	'app', 
], function(app) {
	app.initialize();
});