function setRouter(app){ 
 var router = app; 

app.get('/getNews',function(req,res){
	var index = req.query.index
	var length = req.query.length
	console.log(index+'   '+length)
	var data = []
	for(var i=0;i<length;i++){
		data.push('新闻'+(parseInt(index)+i))
	}
	setTimeout(function(){
		res.send(data)
	},1000)
	
})	}
 module.exports.setRouter = setRouter