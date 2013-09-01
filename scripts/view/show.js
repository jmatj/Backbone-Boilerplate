define([
  'jquery',
  'underscore',
  'backbone'
  ], function($, _, Backbone){
	
  var ShowView = Backbone.View.extend({
	  
    el: $('#container'),
    
    render: function(){
      this.$el.children('h1').text('Show');
    }
  
  });
  
  return ShowView;
  
});