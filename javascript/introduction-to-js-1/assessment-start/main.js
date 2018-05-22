var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// 随机数组
function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var inserX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var inserY = ['the soup kitchen', 'Disneyland', 'the White House'];
var inserZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


function result() {
  var newStory = storyText
  var xItem = randomValueFromArray(inserX);
  var yItem = randomValueFromArray(inserY);
  var zItem = randomValueFromArray(inserZ);

  newStory = newStory.replace(/:insertx/g, xItem);
  newStory = newStory.replace(':inserty', yItem);
  newStory = newStory.replace(':insertz', zItem);

  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    // 1 stone == 14 pounds
    // C = 32 + (1.8 * c)
    var weight = Math.round(300);
    var temperature =  Math.round(94);

    var pounds = Math.round(weight*14);
    var centigrade = Math.round(32+(1.8*temperature));

    newStory = newStory.replace('94 farenheit', 'centigrade '+centigrade);
    newStory = newStory.replace('300 pounds', 'pounds '+pounds);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


randomize.addEventListener('click', result)