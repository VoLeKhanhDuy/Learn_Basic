# TỔNG HỢP 34 CÂU LỆNH GIT QUAN TRỌNG - TỪ CƠ BẢN ĐẾN NÂNG CAO

## 𝐀/ 𝐌Ứ𝐂 ĐỘ 𝐂Ơ 𝐁Ả𝐍

1. git config

Git config là câu lệnh mà chúng ta phải thực thi đầu tiên cài đặt git lên máy. Câu lệnh này sẽ giúp các bạn thiết lập tên và email cá nhân của bạn, những thông tin này sẽ đính kèm trong mọi commit của bạn, đều này sẽ rất hữu ích khi chúng ta muốn biết đoạn code nào đó đã được ai triển khai để có thể thảo luận trong trường hợp chúng ta không hiểu rõ đoạn code đấy sử dụng cho mục đích gì.

> `$ git config --global user.name "Your name"`
>
> `$ git config --global user.email "Your email"`

2. git version

Câu lệnh này dùng để kiểm tra phiên bản git đang sử dụng trên máy.

> `$ git version`

3. git init

Đây là câu lệnh đầu tiên khi chúng ta bắt đầu một dự án mới, câu lệnh này sẽ giúp chúng ta tạo một repository mới, sau đó nó sẽ được sử dụng để lưu trữ và quản lý mã nguồn trong repository này.

> `$ git init`

> // Hoặc bạn có thể đặt tên cho repo với lệnh

> `$ git init <your repository name>`

4. git clone

Câu lệnh này giúp download một repository đã tồn tại sẵn trên khô lưu trữu (github, gitlab v.v) về máy.

> `git clone <your project URL>`

5. git add

Git add là câu lệnh giúp thêm tất cả các file code mới mới hoặc các file code được chỉnh sửa vào repository.

> `$ git add your_file_name` - Thêm một file( thêm mới hoặc chỉnh sửa) vào staging area

> `$ git add .` - Thêm tất cả các file (thêm mới hoặc chỉnh sửa) vào staging area

6. git commit

Đây là câu lệnh được sử dụng phổ biến nhất, câu lệnh này giúp lưu các thay đổi ở các file trong vùng staging area xuống repository.

Có thể hiểu git add dùng để thêm thêm các file được thay đổi hoặc thêm mới vào vùng staging area, và chúng sẽ sẵn sàng để commit và sau đó những thay đổi này sẽ được lưu xuống repository.

> `$ git commit -m “your useful commit`

7. git status

Câu lệnh này cho phép bạn xem tình trạng hiện tại của mã nguồn như có bao nhiêu file được thêm mới hoặc chỉnh sửa. Những file nào đang nằm trong vùng staging area hoặc đang nằm ngoài staging area.

8. git branch

Trong một Git repository luôn luôn tồn tại nhiều nhánh riêng biệt dùng để triển khai một tính năng nào đó độc lập với các nhánh khác.

Các lệnh branch các bạn có thể sử dụng:

> `$ git branch` - Dùng để hiển thị tất cả các branch đang có.

> `$ git checkout -b <branch_name>` - Dùng để tạo một branch mới.

> `$ git branch -d <branch_name>` - Xoá branch.

9. git checkout

Để di chuyển qua lại giữa các branch, chúng ta có thể sử dụng git checkout để đạt được điều này.
git checkout <branch_name>. Ngoài ra các bạn có thể vừa chuyển qua một branch mới và tiện thể khởi tạo nếu chưa tồn tại với câu lệnh.

> `$ git checkout -b <your_new_branch_name>`

## 𝐁/ 𝐌Ứ𝐂 ĐỘ 𝐓𝐑𝐔𝐍𝐆 𝐁Ì𝐍𝐇

10. git remote

Repository được các bạn khởi tạo với câu lệnh git init chỉ đang tồn tại trên máy local của các bạn. Nếu muốn lưu trữ repository này lên một dich vụ lưu trữ git từ xa nào đó chẳng hạn như gitlab, github thì các bạn cần phải sử dụng git remote để kết nối giữa chúng.

> `$ git remote add <shortname> <url>`

> > Ví dụ:

> > $ git remote add origin

11. git push

Khi đã kết nối giữa local và dịch vụ lưu trữ git, chúng ta cần sử dụng lệnh git push để đồng bộ những thay đổi được commit trên local lên dich vụ lưu trữ.

> `$ git push -u <short_name> <your_branch_name>`

> > Ví dụ

> > $ git push -u origin feature_branch

- Ngoài ra trước khi sử dụng git push các bạn nên cấu hình origin và upstream.

> `$ git push --set-upstream <short_name> <branch_name>`

> > Ví dụ

> > $ git push --set-upstream origin feature_branch

12. git fetch

Git được sử dụng để làm việc nhóm, quản lý mã nguồn. Ngoài những commit của bạn thì còn vô số commit khác của các thành viên khác trong team. Sử dụng git fetch sẽ giúp chúng ta cập nhật tất cả những thông tin mới như commit, branch, v.v.

> `$ git fetch`

13. git pull

Câu lệnh này sẽ download tất cả những nội dung (không chỉ là metadata như git fetch) từ dịch vụ lưu trữ xuống local repository.

> `$ git pull <remote_url>`

14. git stash

Git stash cho phép chúng ta lưu trữ các file được chỉnh sửa trong vùng nhớ tạm.

> `$ git stash`

> `$ git stash list` - Nếu muốn xem tất cả các stash các bạn có thể sử dụng lệnh:

> `$ git stash apply` or `$ git stash pop` - Nếu bạn muốn áp dụng các chỉnh sửa trong một stash nào đó lên branch hiện tại đang sử dụng.

15. git log

Với câu lệnh git log các bạn có thể xem tất cả những commit trước đó được sắp xếp theo thứ tự commit gần nhất cho đến những commit cũ hơn.

> `$ git log`

16. git shortlog

Nếu chỉ muốn xem git log với nội dung được tóm tắt ngắn gọn thì các bạn có thể sử dụng git shortlog.

> `$ git shortlog`

17. git show

Lệnh này dùng để xem thông tin chi tiết của một commit bất kỳ.

`$ git show <your_commit_hash>`

18. git rm

Đôi lúc các bạn muốn xoá một file từ code base, trong trường hợp này các bạn có thể sử dụng git rm.

> `$ git rm <your_file_name>`

19. git merge

Git merge cho phép các bạn kết mã nguồn và những thay đổi trên một branch khác vào branch hiện tại.

> `$ git merge <branch_name>`

Câu lệnh này sẽ kết hợp những thay đổi trên branch có tên là <branch_name> vào branch hiện tại.
