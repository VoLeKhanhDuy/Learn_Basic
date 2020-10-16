
// Cài đặt json server: npm i json-server

// Tạo db.json và tạo nội dung muốn lưu

// Vào package.json thêm đoạn này ở phần script
// "start": "json-server --watch db.json"


// Làm việc với json
// var courseApi = 'http://localhost:3000/course';
// fetch(courseApi)
//     .then(response => response.json())
//     .then(course => console.log(course))


//THÊM / SỬA / XÓA KHÓA HỌC VỚI FETCH VÀ REST API
var courseApi = 'http://localhost:3000/course';

function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();


//Function
function getCourses(callback) {
    fetch(courseApi)
        .then(response => response.json())
        .then(callback);
}

function createCourses(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(response => response.json())
        .then(callback)
        
}

function handleDeleteCourse(id)
{
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi + '/' + id, options)
        .then(response => response.json())
        .then(function(){
            getCourses(renderCourses);
        })

    
    
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');

    var htmls = courses.map(function(course) {
        return `
                <li>
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                </li>
                `;
    });
    listCoursesBlock.innerHTML = htmls;
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        }
        createCourses(formData, function() {
            getCourses(renderCourses);
        });
    }
}