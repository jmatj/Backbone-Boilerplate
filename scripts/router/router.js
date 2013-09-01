define([
  'jquery',
  'underscore',
  'backbone',
  'view/home',
  'view/show',
  'view/edit'
], function($, _, Backbone, HomeView, ShowView, EditView){
	
	var Router = Backbone.Router.extend({
	    routes: {
	    	
	      '': 'home',
	      'edit': 'edit',
	      'show': 'show'
	    	  
	    }
	  });

	  var initialize = function(){
		  
	    var router = new Router;
	    
	    router.on('route:home', function(){
	      console.log('home');
	      var homeView = new HomeView();
	      homeView.render();
	    });
	    
	    router.on('route:edit', function(){
	    	console.log('edit');
		    var editView = new EditView();
		    editView.render();
	    });
	    
	    router.on('route:show', function(){
	    	console.log('show');
		    var showView = new ShowView();
		    showView.render();
	    });
	    
	    Backbone.history.start();
	  };
	  
	  return {
	    initialize: initialize
	  };
	});