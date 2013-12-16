module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);


  //home route
  app.post('/check-in', function(req, res){
    app.checkins = app.checkins + 1;
  console.log('Checked in, Check ins :  ' + app.checkins);
  }
  app.post('/check-out', function(req, res){
        app.checkins = app.checkins - 1;

  console.log('Checked out, Check ins :  ' + app.checkins);
  }

};
