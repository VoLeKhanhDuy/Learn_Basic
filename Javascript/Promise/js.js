/*
    Promise: là khái niệm sinh ra để xử lý quy tắc bất đồng bộ. Trước khi có promise
    thì chúng ta sử dụng callback mà callback thì xảy ra vấn đề là callback hell nó sẽ
    bị xâu vào rất khó nhìn, khó hiểu. Nên promise được sinh ra để khắc phục callback hell

    Muốn tạo ra Promise thì chúng ta sẽ new Promise và nhận 1 function, trong function nhận 2
    tham số 1 là resolve, 2 là reject. Nếu thao tác xử lý của chúng ta thành công thì gọi resolve 
    còn nếu thất bại thì gọi reject

    Khi sử dụng promise thì chúng ta sẽ sử dụng .then và .catch 2 cái này đều nhận callback function
    thằng .then khi promise của chúng ta nhận resolve còn .catch khi promise chúng ta nhận reject 

*/

//Promise (sync, async)
/*
    sync (đồng bộ): thằng nào viết trước chạy trước, viết sau chạy sau
    async (bất đồng bộ): thằng này viết trước thằng kia nhưng lại được in ra sau thằng kia
 */

//Promise (pain)
/*
    Callback hell: việc kế tiếp phải chờ kết quả từ việc trước mới thực hiện được
    Pyramind of doom: kim tự tháp   
*/

//Promise (concept)

/*
      *3 trạng thái
    1. Pendding: trạng thái chờ thành công hay thất bại (rò rỉ bộ nhớ - memory leak)
    2. Fulfilled - thành công
    3. thất bại
*/
var promise = new Promise(
    //Executor
    function(resolve, reject) { // khi gọi đến promise thì sẽ gọi đến function này
        //Logic
        // Nếu Thành công -> resolve
        // Nếu Thất bai -> reject


        //Fake call API 
        resolve([
            {
                id: 1,
                name: 'JS'
            }
        ]);
        //reject('Có lỗi!');
    }
);
promise 
    .then(function(course) { // = resolve
        console.log(course);    
    })
    .catch(function() { // = reject 
        console.log('Thất bại');
    })
    /*
        .catch(function(error) { // = reject 
            console.log('Thất bại');
    })
    */
    .finally(function() {
        console.log('Xong');
    });

//----------------------------------------------
//Promise (chain)
promise // cái .then thứ nhất return về cái gì thì cái value đó sẽ nhận được từ thằng .then thứ 2
        // (cái kết quả trả về của function trước là tham số đầu vào của function sau)
        // Nếu .then đầu tiên trả ra undefine thì sẽ chạy tiếp thằng .then thứ 2. NẾU NÓ KHÔNG PHẢI LÀ MỘT PROMISE
        // còn nếu nó là 1 PROMISE thì sẽ đợi PROMISE thực hiện xong mới tiếp đến .then thứ 2
        /*
            .then(function() { // = resolve
                return new Promise(function(resolve) {
                    setTimeout(resolve, 3000); => sau 3s .then này thực hiện thì .then kế tiếp mới chạy
                });
            }) 
        */
    .then(function() { // = resolve
        return 1;    
    })
    .then(function(data) { // = resolve
        console.log(data); 
        return 2;   
    })
    .then(function(data) { // = resolve
        console.log(data);    
    })
    .catch(function() { // = reject 
        console.log('Thất bại');
    })
//-----------------------------------------------
//Promise methods
/*
    Nếu gặp lỗi giữa đường thì sẽ nhảy vào .catch và không thực hiện các .then phía sau nữa

    Promise.resolve() -> trả về Promise ở trang thái thành công
    Promise.reject() -> trả về Promise ở trang thái thất bại
    Promise.all() -> chạy song song các Promise
*/


//Promise example
var users = [
    {
        id: 1,
        name: 'QWE'
    },
    {
        id: 2,
        name: 'ASD'
    },
    {
        id: 3,
        name: 'ZXC'
    },
];

var comments = [
    {
        id: 1,
        user_id: 1, // xác định user có id là 1 cmt với content này
        content: 'Nội dung người dùng comment...'
    },
    {
        id: 2,
        user_id: 2, 
        content: 'Ok biết rồi.'
    }
];

// 1.Lấy comments
// 2.Từ comments lấy ra user_id
// 2.Từ user_id lấy ra user tương ứng


// Fake API
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
        }, 1000)
    }, 1000);
}

getComments() 
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        });

        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                };
            });
    })
    .then(function(data) {

        var commentBlock = document.getElementById('comment-block');
        
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    })