var express = require('express');
var router = express.Router();
const database=require('../models/portfoli')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/About', function(req, res, next) {
  res.render('About');
});
router.get('/Skill', function(req, res, next) {
  res.render('Skill');
});
router.get('/Education', function(req, res, next) {
  res.render('Education');
});

router.get('/Contact', function(req, res, next) {
  res.render('Contact');
});

router.post('/input',async function(req, res, next) {
  await database.create(req.body)
  try {
    res.redirect('/show')
    
  } catch (error) {
    res.send(error)
  }
});


router.get('/show', function(req, res, next) {
  
  try {
  console.log('data sent successfully')
    
  } catch (error) {
    res.send(error)
    
  }
});



module.exports = router;
