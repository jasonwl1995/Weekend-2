$(document).ready(onReady);

function onReady() {
  console.log('jquery is loaded!');

  $(document).on('submit', '#inputForm', onSubmit);
  $(document).on('click', '#clearBtn', onClear);
}

function onClear(evt) {
  evt.preventDefault();
  console.log('Clear button clicked');
  $('#firstNum').val('');
  $('#secondNum').val('');
  //  $('#operation').val();
}

function onSubmit(event) {
  event.preventDefault();
  console.log('button clicked');

  // take all the things and package them for transport

  let newEquation = {
    firstNum: $('#firstNum').val(),
    secondNum: $('#secondNum').val(),
    operation: $('#operation').val(),
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
    })
    .catch(function (error) {
      console.log('Sorry, seems to be something wrong,', error);
    });
}
