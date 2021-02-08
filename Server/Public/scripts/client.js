$(document).ready(onReady);

function onReady() {
  console.log('jquery is loaded!');

  $(document).on('submit', '#inputForm', onSubmit);
  $(document).on('click', '#clearBtn', onClear);
  $(document).on('click', '#opt1', onOpt1);
  $(document).on('click', '#opt2', onOpt2);
  $(document).on('click', '#opt3', onOpt3);
  $(document).on('click', '#opt4', onOpt4);
}

// adding operator string
let opt = '';

function onClear(evt) {
  evt.preventDefault();
  console.log('Clear button clicked');
  $('#firstNum').val('');
  $('#secondNum').val('');
  opt = '';
}

function onOpt1(evt) {
  evt.preventDefault();
  opt = '1';
}

function onOpt2(evt) {
  evt.preventDefault();
  opt = '2';
}

function onOpt3(evt) {
  evt.preventDefault();
  opt = '3';
}

function onOpt4(evt) {
  evt.preventDefault();
  opt = '4';
}

function onSubmit(event) {
  event.preventDefault();
  console.log('button clicked');

  // take all the things and package them for transport

  let newEquation = {
    firstNum: $('#firstNum').val(),
    secondNum: $('#secondNum').val(),
    opt: opt,
  };

  console.log('newEquation', newEquation);

  // POST newEquation data to server
  $.ajax({
    data: {
      input_data: newEquation,
    },
    url: '/calculation',
    method: 'POST',
  })
    .then(function (response) {
      console.log('You submitted some stuff!');
      // run a function to post stuff on DOM
      console.log('response came back', response);
    })
    .catch(function (error) {
      console.log('Sorry, seems to be something wrong,', error);
    });
}
