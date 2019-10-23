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


function test(storedDataScores, userInput) {
  // These two are for determining the individual.
  var index = 20;
  var lowestValue = 10000;
  // These two are responsible for building the necessary array to determine the match. 
  var results = 0;
  var personFinderArray = [];
  // This for loop, loops through all the stored people.
  for (var i = 0; i < storedDataScores.length; i++) {
    console.log(`This is currently index number: ${i}`);
    // This for loop will loop through the individuals scores
    for (var s = 0; s < storedDataScores[i].scores.length; s++) {
      var currentScore = storedDataScores[i].scores[s]
      results += Math.abs(currentScore - userInput[s]);
    }
    personFinderArray.push(results);
    console.log(personFinderArray);
    results = 0;
  }

  // Code to determine the lowest value. Then Return That individuals information. 
  for (var i = 0; i < personFinderArray.length; i++) {
    if (personFinderArray[i] < lowestValue) {
      lowestValue = personFinderArray[i];
      index = i;
    }
  }
  console.log(`Index Is: ${index}`);
  console.log(`Lowest Value: ${lowestValue}`);
}

test(data, [2,3,4,5,6,7,8,9,10,11]);