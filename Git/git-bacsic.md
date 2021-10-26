# Học Git cơ bản

## Cấu hình tên và email

`git config --global user.name 'KhanhDuy'`
`git config --global user.email 'duy@gmail.com'`

## Git respository

- Là kho lưu trữ tất cả các thay đổi trong project
- Tạo 1 git respo

`git init`

## Các câu lệnh cơ bản

### Kiểm tra thư mục dự án có trạng thái như thế nào

`git status`

## Git commit

- Là hành động ghi vào kho lưu trữ (nó là file .git)

`git commit -m "Nội dung commit"`

### Staging Area

- Là khu vực theo dõi được những file sẽ được thực hiện ở lần commit tiếp theo
- Nếu muốn đưa file từ `thư mục làm việc` sang `Staging Area` ta dùng lệnh `git add name_file` hoặc muốn đưa tất cả các file thì `git add .`
- Muốn đưa file từ `Staging Area` vào Respo ta dùng lệnh `git commit -m "Nội dung commit"`
- Mô tả:

```
  Thư mục làm việc                          Staging Area                          Commited
    index.html  -> (git add index.html) ->   index.html -> (git commit -m "") -> index.html

```

- Để đưa file từ trạng thái Staging Area sang Thư mục làm việc ta dùng lệnh: `git restore --staged tên_file`

### Git log (Xem danh sách commit)

`git log`

### Đưa các commit lên Repos trên Server (trên git web)

`git push`

### git branch (nhánh)

- Giúp chúng ta làm việc tại nhánh của riêng mình mà không ảnh hưởng đến code của người khác
- Khi tạo branch thì những `commit` của chúng ta sẽ không ảnh hưởng đến các branch khác
- Hiển thị tất cả các nhánh trong project: `git branch`
- Tạo 1 branch mới: `git checkout -b tên_branch`
- Đi tới 1 branch đã có: `git checkout tên_branch`

Tạo 1 branch mới từ branch main, lúc này branch main đang có commit a, b, c thì khi mình tạo branch mới từ branch main thì branch mới sẽ có 3 commit a, b, c

### Git merge

- Gộp code từ branch vào branch hiện tại đang đứng

`git merge name_branch`

VD:
Ta đang đứng ở branch main và gõ lệnh `git merge branch_test` thì câu này có nghĩa là merge các commit từ branch `branch_test` vào branch main
