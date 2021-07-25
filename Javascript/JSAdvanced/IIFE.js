// Là một hàm được gọi NGAY LẬP TỨC

/**
   Dùng ; trước IIFE
   IIFE là một hàm private
 */

(function() {
    console.log('NOW NOW')
})()

(function(message) {
    console.log(message)
})('Chào bạn!')