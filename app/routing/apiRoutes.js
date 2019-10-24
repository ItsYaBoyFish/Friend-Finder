console.log('Api Routes Loaded');
const path = require('path');


// I couldnt get these routes to work from a seperate file like this. 

// module.exports = function(app, scoreComparison, data) {
//   app.post('/api/friends', function(req, res) {
//     console.log('This compares the users input to all friends in the list');
//     console.log(req.body);
//     let result = scoreComparison(data, req.body.scores);
//     console.log(`This is the result from the returned value out of the function: ${result.index}`);
//     res.send(result);
//   });
  
//   app.get('/api/friends', function(req, res) {
//     console.log('This shows all friends currently available');
//     res.send(data);
//   })
// }