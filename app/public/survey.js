console.log('Hello There');

// Variables to hold selected values
const name = document.querySelector('#name');
const image = document.querySelector('#image');
const selectionBoxOne = document.querySelector('#selectionBoxOne');
const selectionBoxTwo = document.querySelector('#selectionBoxTwo');
const selectionBoxThree = document.querySelector('#selectionBoxThree');
const selectionBoxFour = document.querySelector('#selectionBoxFour');
const selectionBoxFive = document.querySelector('#selectionBoxFive');
const selectionBoxSix = document.querySelector('#selectionBoxSix');
const selectionBoxSeven = document.querySelector('#selectionBoxSeven');
const selectionBoxEight = document.querySelector('#selectionBoxEight');
const selectionBoxNine = document.querySelector('#selectionBoxNine');
const selectionBoxTen = document.querySelector('#selectionBoxTen');

const surveySubmitBtn = document.querySelector('#surveySubmitBtn');

surveySubmitBtn.addEventListener('click', async function() {
  data = {
    name: name.value,
    image: image.value,
    scores: [
      selectionBoxOne.value, 
      selectionBoxTwo.value,
      selectionBoxThree.value,
      selectionBoxFour.value,
      selectionBoxFive.value,
      selectionBoxSix.value,
      selectionBoxSeven.value,
      selectionBoxEight.value,
      selectionBoxNine.value,
      selectionBoxTen.value
    ]
  };

  console.log(data);

  var options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  }

  var response = await fetch('/api/friends', options);
  var person = await response.json();
  console.log(person);
  $('#modalName').text(person.name);
  $('#modalImage').attr('src', person.image)
  // $('#modalImage').attr('style', 'width=300px;');
  // $('#modalImage').attr('style', 'height=300px;');
   $('#personModal').modal('show');
})