var io = require('socket.io').listen(80);


module.exports = function(app){

  var home = require('../app/controllers/home');
  app.get('/', function (req, res) {
    res.render('home/index', {
      title: 'Synth Whos In',
      checkIns : app.checkins
    });
  });
  app.post('/check-in', function(req, res){
    app.checkins = app.checkins + 1;
    console.log('Checked in, Check ins :  ' + app.checkins)
    res.send(200)

    io.sockets.on('connection', function (socket) {
      socket.emit('checkIns', { number: app.checkins })
    });

  })
  




    app.post('/check-out', function(req, res){
      if (app.checkins > 0 ){
        app.checkins = app.checkins - 1;
      }
      res.send(200)

        socket.emit('checkIns', { number: app.checkins })
      console.log('Checked out, Check ins :  ' + app.checkins);
    });

};


