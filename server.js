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
app.post('/api/friends', function(req, res) {
  console.log('This compares the users input to all friends in the list');
  console.log(req.body);
});

app.get('/api/friends', function(req, res) {
  console.log('This shows all friends currently available');
  
})
// ==============================================================

// Route to handle comparison and selection of closest match.



function scoreComparison() {
  var array = [7,3,21,1];
  // The choices do not allow for anything above a five. So this value is safe.
  var smallestNumber = 100;
  var smallestNumberIndex = 10;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < smallestNumber) {
    smallestNumber = array[i]
    smallestNumberIndex = i;
    } 
    var data = {
      number: smallestNumber,
      index: smallestNumberIndex
    }
    console.log(data);
  }
}

scoreComparison()