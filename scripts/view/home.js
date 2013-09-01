define([
  'jquery',
  'underscore',
  'backbone'
  ], function($, _, Backbone){
	
  var HomeView = Backbone.View.extend({
	  
    el: $('#container'),
    
    render: function(){
      this.$el.children('h1').text('Home');
    }
  
  });
  
  return HomeView;
  
});