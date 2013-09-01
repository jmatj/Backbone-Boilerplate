define([
  'jquery',
  'underscore',
  'backbone'
  ], function($, _, Backbone){
	
  var EditView = Backbone.View.extend({
	  
    el: $('#container'),
    
    render: function(){
      this.$el.children('h1').text('Edit');
    }
  
  });
  
  return EditView;
  
});