module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);


  //home route
  app.get('/check-in', home.checkIn);
  app.get('/check-out', home.checkOut);

};
