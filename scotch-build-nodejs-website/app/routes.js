
const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/', function(req, res) {
  res.render('pages/home');
});

router.get('/about', function(req, res){
  users = [
    { name: 'John', age: 65 },
    { name: 'Bill', age: 45 },
    { name: 'Larry', age: 34 },
    { name: 'Sarah', age: 53 }
  ]
  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.send(`Thanks for contacting us, ${req.body.name}! We will respond shortly.`);
  console.log(req.body);
});

module.exports = router;
