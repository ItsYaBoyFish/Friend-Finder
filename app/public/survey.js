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

surveySubmitBtn.addEventListener('click', function() {
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
    // one: selectionBoxOne.value,
    // two: selectionBoxTwo.value,
    // three: selectionBoxThree.value,
    // four: selectionBoxFour.value,
    // five: selectionBoxFive.value,
    // six: selectionBoxSix.value,
    // seven: selectionBoxSeven.value,
    // eight: selectionBoxEight.value,
    // nine: selectionBoxNine.value,
    // ten: selectionBoxTen.value
  };

  console.log(data);

  var options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  }

  fetch('/api/friends', options)
})