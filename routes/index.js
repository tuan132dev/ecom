var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/ecom', function (req, res, next) {
  let pseudo = req.body.pseudo;
  let password = req.body.password;
  let methodGS = req.body.methodGS;
  let domain = "https://tabletandtv.com" // domain dang ki cua khach hang tu co so du lieu
  console.log("methodGS ....", methodGS);

  res.status(200).end(`${domain}/${mapMethodeGS[methodGS]}`);
})


router.post('/start', function (req, res, next) {
  let mail = req.body.mail;
  let domain = req.body.domain;

  // creer random code
  // creer random password

  res.status(200).json({
    code: code,
    password: password
  });
})

module.exports = router;

const mapMethodeGS = {
  getlinkProductAPIbyID: "/api/products/",
  getlinkStockAPIbyID: "/api/stock_availables/",
  getlinkStockAPIbyRef: "/api/products?",
  getUrl_LastOrdersIDs: "/api/orders",
}