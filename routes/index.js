var express = require('express');
var router = express.Router();

var mapCN = {'overview.jade': '概览', 'basics.jade': '技术基础', 'application.jade': '应用领域',
						 'category.jade': '渲染类别', 'movieRendering.jade': '电影渲染',
						 'gameRendering.jade': '游戏渲染', 'artistRendering.jade': '艺术化渲染', 
						 'software.jade': '相关软件', 'personalView.jade': '个人看法', 'about.jade': '关于'}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '计算机渲染', subTitle: '概览'});
});

router.get('/page/*', function(req, res, next) {
	var page = req.params[0];
	res.render('index', {title : '计算机渲染'});
});


router.get('/pages/*', function(req, res, next) {
	var name = req.params[0];
	res.render('pages/' + name, {subTitle: mapCN[name]});
});

module.exports = router;
