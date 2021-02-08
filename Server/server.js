const express = require('express');
const bodyParser = require('body-parser');

// create your express app
const app = express();
const port = 3000;
const history = [];
let lastOpt = '';

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

function solveEq(req, res) {
  let inputData = req.body.input_data;
  console.log('post data', inputData);
  let result = 0;
  if (inputData.opt === '1') {
    result = inputData.firstNum*1.0 + inputData.secondNum*1.0;
    lastOpt = inputData.firstNum + ' + ' + inputData.secondNum + ' = ' + result;
    history.push(lastOpt);
  } else if (inputData.opt === '2') {
    result = inputData.firstNum - inputData.secondNum;
    lastOpt = inputData.firstNum + ' - ' + inputData.secondNum + ' = ' + result;
    history.push(lastOpt);
  } else if (inputData.opt === '3') {
    result = inputData.firstNum * inputData.secondNum;
    lastOpt = inputData.firstNum + ' * ' + inputData.secondNum + ' = ' + result;
    history.push(lastOpt);
  } else if (inputData.opt === '4') {
    result = inputData.firstNum / inputData.secondNum;
    lastOpt = inputData.firstNum + ' / ' + inputData.secondNum + ' = ' + result;
    history.push(lastOpt);
  }
  console.log('results', result);
  return result;
} 

app.post('/calculation', (req, res) => {
  console.log('Post Calculation');
  let inputData = req.body.input_data;
  console.log('checkinputdata', inputData);
  result = solveEq(req,res);
  let dataToClient = {
    result: result,
    lastOpt: lastOpt,
    };
  //  messages.push(solveEq(req, res));

  res.json({ Answer: dataToClient});
});

