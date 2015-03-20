var express = require('express');
var router = express.Router();
var React = require('react/addons');
var ReactApp = React.createFactory(require('../components/ReactApp').ReactApp);

/* GET home page. */
router.get('/', function(req, res, next) {
  // React.renderToString takes your component
    // and generates the markup
  var reactHtml = React.renderToString(ReactApp({}));
    // Output html rendered by react
  // console.log(myAppHtml);
    res.render('index', {title: 'Express',
                         reactOutput: reactHtml});
});

module.exports = router;
