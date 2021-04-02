// Spread: toán tử giải

var array1 = ['Javascript', 'NodeJS', 'Java'];
var array2 = ['ReactJS', 'AngularJS'];
var array3 = [...array2, ...array1];

//----------------------

var object1 = {
    name: 'Javascript'
};
var object2 = {
    price: 1000
};
var object3 = { ...object1, ...object2 }

//---------------------------

var array = ['JS', 'React', 'Angular', 'NodeJS'];

function logger(...rest) {
    for(var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

logger(...array);
