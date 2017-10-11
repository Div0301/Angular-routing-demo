var express=require('express');
//var routes  = require('router');

var app=express();
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname+"/public"));

var router = express.Router();



app.set('views', __dirname + '/public');
app.set('view engine', 'html');


app.use("/",router);
app.use('/',function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000,function(){
	console.log('ready');
});
