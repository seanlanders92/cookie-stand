// ### Day 5 notes
// > - Adding all the numbers in an array together.

// > - var sum = 0;
// > - var myArray = [4,8,15,16,23,42];
// > - for(var i=0; i<myArray.length; i++);
// > - sum = sum + myArray[i];

// > - shorthand version
// > - var altSum = 0
// > - altSum += myArray[i];

// > - var cats = ['josie', 'belle', 'frodo'];
// > - var catAges = ['9', '8', '10'];
// > - for(var i=0; i< cats.length; i++){
// answer += `${cats[i]} is ${catsAges[i]}
// years old ||`
// }

// ### JS Objects
// > - Object Literals
// > - Mimicks real life objects. 
// >    - characteristics, behaviors, functionality.
// > - { defines the start of an object.

// > - var snowman =  {
//     name: 'Olaf',
//     age: '42',
//     height: 63,
//     mood: 'happy',
//     friends: ['sven', 'christof', 'elsa', 'anna']
// }
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function storeHours(){
var hours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var avg =[]
for(var i=0; i<hours.length; i++){
    avg = getRandomInt(23,65) * 6.3;
    return avg + ' cookies at ' + hours[i];
}
}
var seattle = {

}

console.log(storeHours());
