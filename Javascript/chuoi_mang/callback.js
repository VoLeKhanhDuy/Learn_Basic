
var courses = [
    'Javascript',
    'PHP',
    'React'
];

var htmls = courses.map(function(course) {
    return `<h2>${course}</h2>`
});

console.log(htmls.join(''));

