# TỔNG HỢP 34 CÂU LỆNH GIT QUAN TRỌNG - TỪ CƠ BẢN ĐẾN NÂNG CAO

###### Nguồn: CodeGym

## 𝐀/ 𝐌Ứ𝐂 ĐỘ 𝐂Ơ 𝐁Ả𝐍

### <span style="color: #FF9800;">**1. git config**</span>

Git config là câu lệnh mà chúng ta phải thực thi đầu tiên cài đặt git lên máy. Câu lệnh này sẽ giúp các bạn thiết lập tên và email cá nhân của bạn, những thông tin này sẽ đính kèm trong mọi commit của bạn, đều này sẽ rất hữu ích khi chúng ta muốn biết đoạn code nào đó đã được ai triển khai để có thể thảo luận trong trường hợp chúng ta không hiểu rõ đoạn code đấy sử dụng cho mục đích gì.

> `$ git config --global user.name "Your name"`
>
> `$ git config --global user.email "Your email"`

### <span style="color: #FF9800;">**2. git version**</span>

Câu lệnh này dùng để kiểm tra phiên bản git đang sử dụng trên máy.

> `$ git version`

### <span style="color: #FF9800;">**3. git init**</span>

Đây là câu lệnh đầu tiên khi chúng ta bắt đầu một dự án mới, câu lệnh này sẽ giúp chúng ta tạo một repository mới, sau đó nó sẽ được sử dụng để lưu trữ và quản lý mã nguồn trong repository này.

> `$ git init`

Hoặc bạn có thể đặt tên cho repo với lệnh

> `$ git init <your repository name>`

### <span style="color: #FF9800;">**4. git clone**</span>

Câu lệnh này giúp download một repository đã tồn tại sẵn trên khô lưu trữu (github, gitlab v.v) về máy.

> `git clone <your project URL>`

### <span style="color: #FF9800;">**5. git add**</span>

Git add là câu lệnh giúp thêm tất cả các file code mới mới hoặc các file code được chỉnh sửa vào repository.

> `$ git add your_file_name` - Thêm một file( thêm mới hoặc chỉnh sửa) vào staging area

> `$ git add .` - Thêm tất cả các file (thêm mới hoặc chỉnh sửa) vào staging area

### <span style="color: #FF9800;">**6. git commit**</span>

Đây là câu lệnh được sử dụng phổ biến nhất, câu lệnh này giúp lưu các thay đổi ở các file trong vùng staging area xuống repository.

Có thể hiểu git add dùng để thêm thêm các file được thay đổi hoặc thêm mới vào vùng staging area, và chúng sẽ sẵn sàng để commit và sau đó những thay đổi này sẽ được lưu xuống repository.

> `$ git commit -m “your useful commit`

### <span style="color: #FF9800;">**7. git status**</span>

Câu lệnh này cho phép bạn xem tình trạng hiện tại của mã nguồn như có bao nhiêu file được thêm mới hoặc chỉnh sửa. Những file nào đang nằm trong vùng staging area hoặc đang nằm ngoài staging area.

### <span style="color: #FF9800;">**8. git branch**</span>

Trong một Git repository luôn luôn tồn tại nhiều nhánh riêng biệt dùng để triển khai một tính năng nào đó độc lập với các nhánh khác.

Các lệnh branch các bạn có thể sử dụng:

> `$ git branch` - Dùng để hiển thị tất cả các branch đang có.

> `$ git checkout -b <branch_name>` - Dùng để tạo một branch mới.

> `$ git branch -d <branch_name>` - Xoá branch.

### <span style="color: #FF9800;">**9. git checkout**</span>

Để di chuyển qua lại giữa các branch, chúng ta có thể sử dụng git checkout để đạt được điều này.
git checkout <branch_name>. Ngoài ra các bạn có thể vừa chuyển qua một branch mới và tiện thể khởi tạo nếu chưa tồn tại với câu lệnh.

> `$ git checkout -b <your_new_branch_name>`

## 𝐁/ 𝐌Ứ𝐂 ĐỘ 𝐓𝐑𝐔𝐍𝐆 𝐁Ì𝐍𝐇

### <span style="color: #FF9800;">**10. git remote**</span>

Repository được các bạn khởi tạo với câu lệnh git init chỉ đang tồn tại trên máy local của các bạn. Nếu muốn lưu trữ repository này lên một dich vụ lưu trữ git từ xa nào đó chẳng hạn như gitlab, github thì các bạn cần phải sử dụng git remote để kết nối giữa chúng.

> `$ git remote add <shortname> <url>`
>
> Ví dụ:
>
> > $ git remote add origin

### <span style="color: #FF9800;">**11. git push**</span>

Khi đã kết nối giữa local và dịch vụ lưu trữ git, chúng ta cần sử dụng lệnh git push để đồng bộ những thay đổi được commit trên local lên dich vụ lưu trữ.

> `$ git push -u <short_name> <your_branch_name>`
>
> Ví dụ
>
> > $ git push -u origin feature_branch

- Ngoài ra trước khi sử dụng git push các bạn nên cấu hình origin và upstream.

> `$ git push --set-upstream <short_name> <branch_name>`
>
> Ví dụ
>
> > $ git push --set-upstream origin feature_branch

### <span style="color: #FF9800;">**12. git fetch**</span>

Git được sử dụng để làm việc nhóm, quản lý mã nguồn. Ngoài những commit của bạn thì còn vô số commit khác của các thành viên khác trong team. Sử dụng git fetch sẽ giúp chúng ta cập nhật tất cả những thông tin mới như commit, branch, v.v.

> `$ git fetch`

### <span style="color: #FF9800;">**13. git pull**</span>

Câu lệnh này sẽ download tất cả những nội dung (không chỉ là metadata như git fetch) từ dịch vụ lưu trữ xuống local repository.

> `$ git pull <remote_url>`

### <span style="color: #FF9800;">**14. git stash**</span>

Git stash cho phép chúng ta lưu trữ các file được chỉnh sửa trong vùng nhớ tạm.

> `$ git stash`

> `$ git stash list` - Nếu muốn xem tất cả các stash các bạn có thể sử dụng lệnh:

> `$ git stash apply` or `$ git stash pop` - Nếu bạn muốn áp dụng các chỉnh sửa trong một stash nào đó lên branch hiện tại đang sử dụng.

### <span style="color: #FF9800;">**15. git log**</span>

Với câu lệnh git log các bạn có thể xem tất cả những commit trước đó được sắp xếp theo thứ tự commit gần nhất cho đến những commit cũ hơn.

> `$ git log`

### <span style="color: #FF9800;">**16. git shortlog**</span>

Nếu chỉ muốn xem git log với nội dung được tóm tắt ngắn gọn thì các bạn có thể sử dụng git shortlog.

> `$ git shortlog`

### <span style="color: #FF9800;">**17. git show**</span>

Lệnh này dùng để xem thông tin chi tiết của một commit bất kỳ.

`$ git show <your_commit_hash>`

### <span style="color: #FF9800;">**18. git rm**</span>

Đôi lúc các bạn muốn xoá một file từ code base, trong trường hợp này các bạn có thể sử dụng git rm.

> `$ git rm <your_file_name>`

### <span style="color: #FF9800;">**19. git merge**</span>

Git merge cho phép các bạn kết mã nguồn và những thay đổi trên một branch khác vào branch hiện tại.

> `$ git merge <branch_name>`

Câu lệnh này sẽ kết hợp những thay đổi trên branch có tên là <branch_name> vào branch hiện tại.

## 𝐂/ 𝐌Ứ𝐂 ĐỘ 𝐍Â𝐍𝐆 𝐂𝐀𝐎

### <span style="color: #FF9800;">**20. git rebase**</span>

Git rebase tương tự như git merge, nó sẽ kết hợp 1 branch vào branch hiện tại với một ngoại lệ, git rebase sẽ ghi lại tất cả các lịch sử commit.

Bạn nên sử dụng lệnh Git rebase khi bạn có nhiều branch riêng dùng để hợp nhất thành một branch duy nhất. Và nó sẽ làm cho lịch sử commit trở nên tuyến tính và dễ truy vết hơn.

> `$ git rebase <base>`

### <span style="color: #FF9800;">**21. git bisect**</span>

Git bitsect giúp bạn tìm ra những bad commit.

- Để bắt đầu sử dụng $ git bisect start
- Cho git bisect biết về một commit tốt $ git bisect good a123
- Cho git bisect biết về một commit xấu $ git bisect bad z123

### <span style="color: #FF9800;">**22. git cherry-pick**</span>

Git cherry-pick là một lệnh hữu ích. Đó là một lệnh cho phép bạn chọn bất kỳ commit nào từ một branch bất kỳ và áp dụng nó vào một branch hiện tại.

> `$ git cherry-pick <commit-hash>`

### <span style="color: #FF9800;">**23. git archive**</span>

Lệnh Git archive sẽ kết hợp nhiều tệp thành một tệp duy nhất. Nó giống như một tiện ích zip, vì vậy nó có nghĩa là bạn có thể giải nén các tệp lưu trữ để lấy các tệp riêng lẻ.

> `$ git archive --format zip HEAD > archive-HEAD.zip`

### <span style="color: #FF9800;">**24. git pull -rebase**</span>

Nếu bạn muốn download content từ dịch vụ lưu trữ và dùng rebase thay vì merge thì có thể sử dụng

> `$ git pull --rebase`

### <span style="color: #FF9800;">**25. git blame**</span>

Nếu bạn cần kiểm tra nội dung của bất kỳ tệp nào, bạn cần sử dụng git blame. Nó giúp bạn xác định ai đã thực hiện các thay đổi đối với tệp.

$ git blame <your_file_name

▪ 𝟐𝟔, 𝐠𝐢𝐭 𝐭𝐚𝐠

### <span style="color: #FF9800;">**26. git merge**</span>

Trong Git, các thẻ tag rất hữu ích và bạn có thể sử dụng chúng để quản lý bản phát hành. Bạn có thể coi thẻ Git giống như một nhánh sẽ không thay đổi. Nó quan trọng hơn đáng kể nếu bạn đang phát hành công khai.

> `$ git tag -a v1.0.0`

### <span style="color: #FF9800;">**27. git verify-commit**</span>

Lệnh git verify-commit sẽ kiểm tra chữ ký gpg. GPG hoặc “GNU Privacy Guard” là công cụ được sử dụng trong các tệp ký tên và chứa các chữ ký của chúng.

> `$ git verify-commit <commit>`

### <span style="color: #FF9800;">**28. git verify-tag**</span>

Tương tự git verify commit, các bạn có thể kiểm tra trên tag với lệnh

> `$ git verify-tag <tag>`

### <span style="color: #FF9800;">**29. git diff**</span>

Nếu các bạn muốn so sánh một file code nào thay đổi những gì trước khi commit thì các bạn có thể sử dụng

> `$ git diff HEAD <filename>`

Để kiểm tra sự khác nhau giữa mã nguồn hiện tại đã được thay đổi so với local repo

> `$ git diff HEAD <filename>`

So sánh 2 branch

### <span style="color: #FF9800;">**30. git citool**</span>

Git citool là một giải pháp thay thế đồ họa của Git commit.

$ git citool

### <span style="color: #FF9800;">**31. git mv**</span>

Đổi tên git file từ tên cũ sang tên mới

> `$ git mv <old-file-name> <new-file-name>`

### <span style="color: #FF9800;">**32. git clean**</span>

Bạn có thể xoá sạch các nội dung được thay đổi với các untracked files (chưa được theo dõi) với lệnh git clean.

> `$ git clean`
