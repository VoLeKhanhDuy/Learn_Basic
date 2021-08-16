document.addEventListener("DOMContentLoaded", function() {
    var app = new Vue({
        el: "#main-app",
        data: {
            items: ["a", "b","c","d","e","f","g","h","j"],
        },
        method: {

        },
        beforeCreate() {
            // Chạy trước khi DOM render
            console.log("Before Create");
        },
        created() {
            // Chạy trước khi DOM render
            console.log("Created");
        },
        beforeMount() {
            // Chạy trước khi DOM render
            console.log("Before Mount");
        },
        mounted() {
            console.log("Mounted");
        },
        beforeUpdate() { 
            // chỉ chạy khi có data thay đổi và cần render lại giao diện
            // và chỉ chạy khi data trong vue có liên kết với bên ngoài HTML
            console.log("Before Update");
        },
        updated() {
            console.log("Updated");
        },
        beforeDestroy() {
            console.log("Before Destroy");
        },
        destroy() {
            console.log("destroy");
        }
    });
})

/* ****Khái niệm chung
 - DOM: là mô hình đối tượng trong HTML (đã render ra giao diện cho người dùng thấy được)
 - DOM ảo: các đối tượng chưa được render ra giao diện

 - HOOK: những hàm chen vào giữa quá trình vòng đời
*/
