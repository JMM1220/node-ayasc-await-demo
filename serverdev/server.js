var express = require('express');
var app = express();
var util = require('util');

app.use(express.static("../public"));

//static是express内置的一个保存静态文件的方法
//app.get获取 路径router
//res.send  res.senFile 输出文件到页面上
//req请求  res响应输出
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/form',function(req, res) {
	var obj = {
		'first_name': req.query.first_name,
		'last_name': req.query.last_name
	}
	console.log(req, res, 888)
	res.send(util.inspect(obj, {depth: null}))
	res.end(util.inspect(obj, {depth: null}))
})

// apiRoutes.use('/location', function (req, res) {
//   setTimeout(() => {
// 		res.json({
// 			success: true,
// 			location: {
// 				province: '河南省',
// 				city: '南阳市'
// 			}
// 		})
// 	}, 1000)
// })

app.get('/location', (req, res) => {
	setTimeout(() => {
		res.json({
			success: true,
			location: {
				province: '河南省',
				city: '南阳市'
			}
		})
	}, 1000)
})


app.post('/getRechargeType', (req, res) => {
	setTimeout(() => {
		res.json({
			success: true,
			recharge: [
			{
				id: 1,
				number: 10
			}, {
				id: 2,
				number: 20
			}, {
				id: 3,
				number: 30
			}
			]
		})
	}, 1000)
})


var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('实例访问的地址为 http://%s:%s', host, port)
})