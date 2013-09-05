define([
  'jquery',
  'underscore',
  'backbone'
  ], function($, _, Backbone){

	  var NavigationView = Backbone.View.extend({

		el : $('#navigation'),

		events : {
			'click #home' : 'home',
			'click #edit' : 'edit',
			'click #show' : 'show'
		},
		
		home : function(e) {
			e.preventDefault();
			Backbone.history.navigate('/', true);
		},
		
		edit : function(e) {
			e.preventDefault();
			Backbone.history.navigate('/edit', true);
		},
		
		show : function(e) {
			e.preventDefault();
			Backbone.history.navigate('/show', true);
		}

	});
  
  return NavigationView;
  
});