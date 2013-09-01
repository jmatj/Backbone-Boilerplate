require.config({
	paths : {
		jquery : '../libs/jquery-1.8.3.min',
		underscore : '../libs/underscore-min',
		backbone : '../libs/backbone-min'
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