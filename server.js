const express = require('express');
const path = require('path');

const apiRoutes = require('./app/routing/apiRoutes.js');
const data = require('./app/data/friends.js');

const app = express();
require('./app/routing/htmlRoutes.js')(app);
// require('./app/routing/apiRoutes.js')(app, scoreComparison, data);

const port = process.env.PORT || 3000;

app.use(express.static('app/public'));
app.use(express.json());

app.listen(port, function() {
  console.log(`Server Started On Port: ${port}`);
});


// =================== HTML Routing =============================

// This has been moved to the htmlRoutes.js

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'app/public/home.html'));
// });

// app.get('/survey', function(req, res) {
//   res.sendFile(path.join(__dirname, 'app/public/survey.html'));
// });
// ==============================================================

// ================== API Routing ===============================
app.post('/api/friends', function(req, res) {
  console.log('This compares the users input to all friends in the list');
  console.log(req.body);
  let result = scoreComparison(data, req.body.scores);
  console.log(`This is the result from the returned value out of the function: ${result.index}`);
  res.send(result);
});

app.get('/api/friends', function(req, res) {
  console.log('This shows all friends currently available');
  res.send(data);
})
// ==============================================================

// Route to handle comparison and selection of closest match.



function scoreComparison(storedDataScores, userInput) {
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

  let overallResults = {
    name: data[index].name,
    image: data[index].photo,
    index: index
  }
  // console.log(`The position of your friend is ${overallResults.position}`);
  return overallResults;
}

// scoreComparison(data, [1,2,3,4,5,6,7,8,9,10]);