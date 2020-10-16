


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

// Lấy comments
// Từ comments lấy ra user_id
// Từ user_id lấy ra user tương ứng


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