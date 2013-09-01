define([
  'jquery',
  'underscore',
  'backbone'
  ], function($, _, Backbone){
	
  var HomeView = Backbone.View.extend({
	  
    el: $('#container'),
    render: function(){
      this.$el.$('hi').text('Home');
    }
  
  });
  return HomeView;
  
});