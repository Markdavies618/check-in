module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);


  //home route
  app.post('/check-in', home.checkIn);
  app.post('/check-out', home.checkOut);

};
