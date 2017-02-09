var locomotive = require('locomotive'),
	couchdb = require('node-couchdb'),
	Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  	
  	this.title = 'Locomotive';
  	this.docid = 'NONE'; 
  	var me = this;	// ja ja

	var couch = new couchdb("localhost", 5984);  

	couch.get("gridlocked", "82a2c").then(function (data) {
		me.docid = data.data._id 
		console.dir(data);
		console.dir(data.data._id);
	}); 

  	this.render();

}

module.exports = pagesController;
