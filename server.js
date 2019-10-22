const express = require('express');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');
const data = require('./app/data/friends.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('app/public'));
app.use(express.json());

app.listen(port, function() {
  console.log(`Server Started On Port: ${port}`);
});


// =================== HTML Routing =============================
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});
// ==============================================================

// ================== API Routing ===============================
app.get('/api', function(req, res) {
  console.log('api route');
});

app.get('/api/test', function(req, res) {
  console.log('api test route');
})
// ==============================================================

