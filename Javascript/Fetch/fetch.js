
// API -> Application programing interface: cổng giao tiếp giữa các phần mềm
// Backend -> API (URL) -> Fetch -> JSON(hoặc XML) -> JSON.parse -> Javascript types -> Lặp qua (Render ra giao diện)


var postAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(postAPI)
    .then(response => response.json())
    .then(function(posts) { // post: là một json nhận từ phía then nằm trên
        var htmls = posts.map(function(post) {
            return `<li>
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </li>`
        });
        var html = htmls.join(''); // Do hàm map trả về mảng nên cần sử dụng join để nối chuỗi
        document.getElementById('post-block').innerHTML = html;
    })