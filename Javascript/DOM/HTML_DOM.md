## HTML DOM

- Document Object Model
- Khi trình duyệt được tải thì trình duyệt sẽ tạo ra DOM
- Là quy chuẩn của W3C
- DOM không phải của Javascript
- DOM có 3 thành phần:
  - `Element`: thẻ html
  - `Attribute`: thuộc tính của thẻ. `href`, `class`, `id`, `title`,...
  - `Text`: nội dung của thẻ

## DOM Document Object

- Là đại diện cho toàn bộ website

## Get `element` methods

- Có thể lấy element bằng: `id`, `class`, `tag` (h1, h2, span,...), `CSS Selector`, `HTML Collection`

VD:

```html
<h1 id="heading" class="headingClass">Nội dung thẻ h1</h1>

<h1 class="headingClass_2">Nội dung thẻ h1 2</h1>

<div class="box">
  <h2 class="heading_2">Heading 2</h2>
</div>

<form id="form-1"></form>
<form id="loginForm"></form>
```

Get `element`:

```js
// Trả ra 1 element
document.getElementById("heading"); // <h1 id="heading">Nội dung thẻ h1</h1> -> LÀ 1 OBJECT

// Trả ra HTML Collection ~ []
// Có thể lấy nhiều class giống nhau
document.getElementsByClassName("headingClass");

// Trả ra HTML Collection ~ []
// Có thể lấy nhiều thẻ <tag></tag> giống nhau
document.getElementsByTagName("h1");

// Lấy y như CSS Selector
// Trả ra 1 element
document.querySelector(".headingClass_2");
document.querySelector(".box .heading_2");

// Lấy tất cả Selector
// Trả ra NodeList ~ [] ~ HTML Collection
document.querySelectorAll(".box .heading_2");

// Lấy element form
// Trả ra HTML Collection
document.forms["form-1"];
document.forms.loginForm;
```

## DOM Attribute

- Thêm một `attribute` vào Element

VD:

```html
<h1>Heading</h1>
```

```js
let headingElement = document.querySelector("h1");
console.log(headingElement); // <h1>Heading</h1>

headingElement.title = "Heading"; // <h1 title="Heading">Heading</h1>
headingElement.id = "Heading"; // <h1 id="Heading">Heading</h1>
headingElement.className = "Heading"; // <h1 className="Heading">Heading</h1>

// Cách 2
headingElement.setAttribute("class", "heading"); // <h1 className="heading">Heading</h1>
// Vẫn có thể đặt được Attribute mà element đó không có
headingElement.setAttribute("href", "heading"); // <h1 href="heading">Heading</h1> / href là att của thẻ <a>
```

- Get `value` của attribute

```html
<h1 title="heading-title">Heading</h1>
```

```js
headingElement.getAttribute("title"); // heading-title
```

## Text node

### InnerText và TextContent

- Innter text sẽ lấy ra nội dung bên trong 1 element (trả lại những gì mình nhìn thấy)
- Text content sẽ lấy ra toàn bộ những gì có bên trong element kể ra khoảng trắng

```html
<h1 class="heading">Đây là text node trong h1</h1>
```

- Lấy ra một text node trong một element node

```js
var headingText = document.querySelector(".heading");
console.log(headingText.innerText); // Đây là text node trong h1
// ------
console.log(headingText.textContent); // Đây là text node trong h1
```

- Sửa một text node trong một element node

```js
var headingText = document.querySelector(".heading");
headingText.innerText = "Nội dung text node đã sửa";
// ------
headingText.textContent = "Nội dung text node đã sửa";
```

## Innter HTML

- Thêm 1 element vào trong 1 element

```html
<div class="box"></div>
```

```js
var boxElement = document.querySelector(".box");
boxElement.innerHTML = "<h1>ABC</h1>";
/* Kết quả
  <div class="box">
    <h1>ABC</h1>
  </div>
*/
```
