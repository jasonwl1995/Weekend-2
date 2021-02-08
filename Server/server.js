const express = require('express');
const bodyParser = require('body-parser');

// create your express app
const app = express();
const port = 3000;

// Share any files on ./server/public
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listen for Network requests
app.listen(port, function () {
  //When the server is  ready, call this function
  console.log(`I'm Listening`, port);
});

function solveEq() {
  let inputData = req.body.input_data;
  console.log('post data', inputData);
}

app.post('/calculation', function (req, res) {
  console.log('Post Calculation');
  res.send(solveEq());
});

/*
// -------- BASE -----//

// Create your `/train` route here
// when a user visits localhost:5000/train
// this route should return the array of trains

function getTrains() {
  let result1 = '';
  for (i = 0; i < trains.length; i++) {
    result1 +=
      ' The Name is ' +
      trains[i].name +
      ' and the color is ' +
      trains[i].color +
      '<br>';
  }
  return result1;
}

app.get('/train', function (req, res) {
  console.log('GET request for train');
  res.send(getTrains());
});

// Create your `/first-train` route here
// when a user visits localhost:5000/first-train
// this route should return the first train in the array

function getFirstTrain() {
  let index1 = 0;

  const result = trains[index1];

  return result;
}

app.get('/first-train', function (req, res) {
  console.log('GET request for first train');
  res.send(getFirstTrain());
});

// Create your `/last-train` route here
// when a user visits localhost:5000/last-train
// this route should return the last train in the array

function getLastTrain() {
  let index = trains.length - 1;

  const result2 = trains[index];

  return result2;
}

app.get('/last-train', function (req, res) {
  console.log('GET request for last train');
  res.send(getLastTrain());
});
*/
