module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', function (req, res) {
   
    res.render('home/index', {
      title: 'Generator-Express MVC',
      checkIns : app.checkins,
      articles: articles
    });
  });
  //home route
  app.post('/check-in', function(req, res){
    app.checkins = app.checkins + 1;
  console.log('Checked in, Check ins :  ' + app.checkins);
  });
  app.post('/check-out', function(req, res){

    if (app.checkins > 0 ){
      app.checkins = app.checkins - 1;
    }

   console.log('Checked out, Check ins :  ' + app.checkins);
  });

};
