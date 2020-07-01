
var languages = [
    'Javascript',
    'HTML', 
    'CSS'
];
/* shift : xóa đi phần tử đầu mảng và trả về phần tử đã xóa */
/* pop */
console.log(languages.pop()); //Xóa phần từ cuối mảng và trả về phần tử đã xóa
console.log(languages);

/* unshift : Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng */
/* push */
console.log(languages.push('React', 'Java')); //Thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng


/* splice : xóa phần tử 
    Tham số 1: vị trí index bắt đầu xóa
    Tham số 2: số lượng phần tử cần xóa tương ứng với index
    --
    Tham số 3: chèn thêm 1 phần tử vào vị trí dựa trên THAM SỐ 1
*/
languages.splice(1,  0, 'Angular');


var languages2 = [
    'NodeJS',
    'SASS'
];
/* concat : nối 2 mảng lại với nhau */
console.log(languages.concat(languages2));

/* slice : cắt phần tử của mảng và trả về các phần tử đã cắt
    Tham số 1: Vị trí index bắt đầu cắt
    Tham số 2: vị trí index muốn cắt đến
*/
console.log(languages.slice(1, 2));


var courses = [
    {
        id : 01,
        name : 'html',
        coin : 1
    },
    {
        id : 02,
        name : 'css',
        coin : 2
    },
    {
        id : 03,
        name : 'js',
        coin : 0
    },
    {
        id : 04,
        name : 'react',
        coin : 0
    }
];
//map
var newCourses = courses.map(function(course, index) {
    return {
        index : index,
        id : course.id,
        name : `Khoa hoc : ${course.name}`,
        coin : course.coin,
        gia : `Gia : ${course.coin}`
    };
    
});
console.log(newCourses);


//reduce
var newCoin = courses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0);
console.log(newCoin);
// bài tập reduce
// Flat - Làm phẳng mảng từ Depth array - Mảng sâu
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]; // mảng sâu

var newDepthArray = depthArray.reduce(function(mangLuu, cacPhanTuCuaMangDepth) {
    return mangLuu.concat(cacPhanTuCuaMangDepth); // concat: nối mảng
}, []);
console.log(newDepthArray);


//Lấy ra các khóa học và đưa nó vào mảng mới
var topics = [
    {
        topic : "Front-End",
        courses1: [
            {
                id : 1,
                title : "HTML, CSS"
            },
            {
                id : 1,
                title : "Javascript"
            }
        ],
    },
    {
        topic : "Back-End",
        courses1: [
            {
                id : 1,
                title : "PHP"
            },
            {
                id : 1,
                title : "NodeJS"
            }
        ]
    }
];

var newCourses2 = topics.reduce(function(newCourses, course2 ) {
    return newCourses.concat(course2.courses1);
}, []);
console.log(newCourses2);



