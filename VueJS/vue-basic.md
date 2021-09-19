# Vue cơ bản

## Cài đặt

- Cài đặt Vue CLI: `npm install -g @vue/cli`
- Tạo project Vue: `vue create name-project`

## Cú pháp

- Gọi đến thuộc tính trong Vue: `{{ }}`
- Gán giá trị động cho thuộc tính html: `v-bind`. Cách viết tắt `:`

```Javascript
<a v-bind:href="link">Google</a>
```

- In ra giá trị cố định (không có khả năng thay đổi, in ra 1 lần lúc load component): `v-one`

```Javascript
<h1 v-once>{{title}}</h1>
```

- In ra giá trị dạng html: `v-html`

```Javascript
<p v-html="finishedLink"></p>
```

- Sự kiện trong Vue: `v-on:click`. Cách viết tắt `@click`

```html
<button v-on:click="increase(2, $event)">Click me</button>
```

```Javascript
//app.js
new Vue({
  methods: {
    increase: function(step, event) {
      this.counter += step;
    }
  }
})
```

- Binding data 2 chiều: `v-model`

```html
<input type="text" v-model="name" />
<p>{{name}}</p>
```

```Javascript
//app.js
new Vue ({
  el: "#app",
  data: {
    name: "Duy"
  }
})
```

- Assign một class cho thẻ html: `:class`

```html
<div class="demo" :class="{active: isActive}"></div>
<!--
    If isActive == true => class="demo active"
    If isActive == false => class="demo"
-->
```

- Assign nhiều class cho thẻ html: `:class="[{ }, { }]"`

```html
<button type="button" :class="['btn', {active: isActive}]">Button</button>
<!--
    If isActive == true => class="btn active"
    If isActive == false => class="btn"
-->
```

Ta có thể dùng toán tử 3 ngôi trong `:class`

```html
<button type="button" :class="['btn', isActive ? 'active' : 'disabled']">
  Button
</button>
<!--
    If isActive == true => class="btn active"
    If isActive == false => class="btn disabled"
-->
```

- Assign động style cho thẻ html: `:style`

```html
<div :style="{backgroundColor: color}"></div>
```

Các tên thuộc tính css được viết kiểu camelCase

## Computed

- Khi giá trị trong hàm computed bị phụ thuộc và thay đổi thì hàm trong computed sẽ tính toán lại.
- Computed không nhận vào bất kì tham số nào.
- Khi gọi computed thì không cần sử dung đến `()`.

```html
<div id="example">{{ reversedMessage }}</div>
```

```Javascript
//app.js
new Vue ({
  el: "#app",
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})
```

- Nếu không dùng computed thì ta có thể dùng methods để thay thế. Tuy nhiên, sự khác biệt ở đây là computed được cache lại dựa vào những thành phần phụ thuộc (dependency). Một computed property chỉ được tính toán lại khi những thành phần phụ thuộc của chúng thay đổi. Điều này có nghĩa: miễn là giá trị của message không thay đổi, thì những truy cập tới computed reversedMessage sẽ ngay lập tức trả về kết quả được tính toán trước đó mà không phải chạy lại hàm một lần nữa.
- Về methods thì không cần biết lúc nào giá trị sử dụng trong hàm thay đổi, nên nó chạy liên tục để check (Bất kỳ lúc nào có sự kiện gì).

## Watch

- Sử dụng để theo dõi 1 biến nào đó -> làm cái gì đó khi 1 biến bị thay đổi.
- Không chỉ thuộc tính của data, thuộc tính của computed cũng có thể được watch.

```Javascript
//app.js
new Vue ({
  watch: {
    // Những thứ cần watch: data, computed
  }
})
```

## Directive

- `v-if`, `v-else`: render html theo điều kiện

```html
<p v-if="boolean">Hello!</p>
<p v-else>Hi!</p>
<!--
    If boolean == true => Hello!
            else => Hi!
-->
```

- `v-show`: xác định thẻ html có được hiển thị hay không. Nó giống với `display: none` trong css.

* Chú ý: `v-show` không hỗ trợ thẻ `<template>` và cũng không hoạt động với `v-else`.

- `v-for` dùng để lặp và render các phần tử của mảng, object.

```html
<!-- ingredients: ["meat", "fruit", "cookies"] -->
<ul>
  <li v-for="ingredient in ingredients">{{ingredient}}</li>
</ul>
```

Có thể dùng cho kiểu Object

```html
<!-- 
    persons = {
        id: 1,
        name: ABC,
        age: 22
    }
 -->
<li v-for="person in persons" :key="person.id">
  <div>{person.name}</div>
  <div>{person.age}</div>
  <div>{person.address}</div>
</li>
```

## Filters

Sử dụng để format, điều chỉnh dữ liệu render ra ngoài html, có thể dùng nhiều filter bằng cách ngăn cách bằng dấu `|` lúc gọi.

```html
<p>{{ text | toUppercase | toLowercase }}</p>
```

```Javascript
//app.js
new Vue ({
    filters: {
        toUppercase(value) {
            value.toUpperCase();
        }
    }
})
```

## Slots

- Dùng để truyền data từ bên ngoài vào trong component ~ `props`.

VD:

```js
<template>
  <component-slot>
    <h1>Nội dung này sẽ được truyền vào chỗ thẻ Slot</h1>
  </component-slot>
</template>
```

Trong `component-slot`

```js
<template>
  <slot></slot>
</template>
```

VD2: Truyền nhiều Slot

```js
<template>
  <component-slot>
    <h1 slot="the-h1">Nội dung này sẽ được truyền vào chỗ thẻ Slot </h1>
    <p slot="the-p">Nội dung thẻ p </p>
  </component-slot>
</template>
```

Trong `component-slot`

```js
<template>
  <div class="slot-1">
    <slot name="the-h1"></slot>
  </div>

  <div class="slot-2">
    <slot name="the-p"></slot>
  </div>
</template>
```

## Props

- Sử dụng khi tiếp nhận data từ 1 component khác.

### Component cha -> Component con

- Truyền dữ liệu từ component cha sang component con ta sử dụng `v-bind:key="value"`

Component cha

```html
<template>
  <ComHeader :message="msg" />
  <!--
    Truyền biến msg xuống component con thông qua :message
  -->
</template>
```

```Vue
<script>
  import ComHeader from './components/ComHeader.vue';
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    }
  }
</script>
```

Component con nhận data từ component cha thông qua `props`

```html
<template>
  <div>
    <p>{{ message }}</p>
    <!--
      message ở đây là biến từ msg trên component cha
    -->
  </div>
</template>
```

```Vue
<script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
        default: ''
      }
    },
  }
</script>
```

### Component con -> Component cha

- Truyền data từ component con lên component cha thông qua `$emit`. Đối số thứ nhất là `event name`, đối số thứ 2 là`event data`.
  Tại component con

```html
<template>
  <button @click="changeTitleHeader">Thay đổi title từ ComHeader.vue</button>
</template>
```

```Vue
<script>
  export default {
    props: ['name'],
    methods: {
      changeTitleHeader() {
        var data = {
          title: 'data của Header'
        }
        this.$emit('changeTitleEvent', data);
      }
  }
  }
</script>
```

Tại component cha lắng nghe lại bằng `@`.

```html
<template>
  <ComHeader :message="msg" @changeTitleEvent="handleChangeTitle" />
</template>
```

```Vue
<script>
  import ComHeader from './components/ComHeader.vue';
  export default {
    methods: {
      handleChangeTitle(data) {
        this.msg = data.title;
        console.log(data);
      },
    }
  }
</script>
```

## Component động

Thuộc tính `:is` của component cho phép render component động.

```html
<template>
  <div>
    <component :is="selectedComponent"></component>
  </div>
</template>
<script>
  // selectedComponent = "Component Name"
</script>
```

Mỗi khi chuyển đổi giữa các component, component sẽ bị huỷ và dữ liệu sẽ bị reset. Khi không muốn bị destroy thì dùng tag `<keep-alive>` để bọc lại tag component. Khi đó component sẽ chuyển đổi giữa 2 life cycle `activated` và `deactivated`.

# Vue Router

- Cài đặt: `$ npm install --save vue-router`
- Routing được định nghĩa:

```Javascript
//routes.js
import User from "./components/user/User.vue";

export const routes = [
    { path: "", component: Home },
    { path: "/user/:id", component: User }
]
```

- Import vào `main.js`.

```Javascript

import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history"
});

new Vue({
    el: "#app",
    router
    render: h =>h(App)
})
```

## Router view

Chỉ định vị trí component được render.

```html
//app.vue
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
```

## Router-link

```html
<router-link to="/" tag="li" active-class="active" exact>Home</router-link>
<!-- nếu không có "exact", lúc truy cập "/" url thì mọi link đều active -->
<router-link to="/user" tag="li" active-class="active">User</router-link>
```

Chỉ định kiểu động thì dùng `{{}}`

```html
<router-link
  tag="button"
  :to="{ name: 'UserEdit', params: { id: $route.params.id }, query: { locale: 'en' } }"
  class="btn btn-primary"
>
  Edit
</router-link>
```

## Lấy tham số từ URL

Sử dụng `$route.params`

```Vue
<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
```

## Child router

```Javascript
//routes.js
import User from "./components/user/User.vue";

export const routes = [
    {
      path: "",
      component: Home
    },
    {
      path: "/user/",
      component: User,
      children: [
        { path: "", component: UserStart },
        { path: ":id", component: UserDetail },
        { path: ":id/edit", component: UserEdit }
      ]
    }
]
```

## Before enter

Khi sử dụng `before enter`, xử lý sẽ được chạy trước khi `router-view` được `render`. Sau đây là 3 chỗ có thể viết được.

1. Global

```Javascript
//main.js
router.beforeEach((to, from, next) =>{
    // Đoạn xử lý thêm
    next();
});
```

2. Local

```Javascript
//routes.js
import User from "./components/user/User.vue";

export const routes = [
    {
      path: "",
      component: Home
    },
    {
      path: "/user/",
      component: User,
      children: [
        {
          path: "",
          component: UserStart
        },
        {
          path: ":id",
          component: UserDetail,
          beforeEnter: (to, from, next) => {
            next();
          }
        },
        {
          path: ":id/edit",
          component: UserEdit
        }
    ]}
]
```

3. Component

```Javascript
beforeRouteEnter(to, from, next) {
    next():
}
```

## Lifecycle Hook

- Là những phương thức được thực thi ở mỗi giao đoạn trong vòng đời của 1 component trong Vue.
- Có 4 giai đoạn:
  - Khởi tạo một đối tượng Vue
  - Gắn kết vào DOM
  - Cập nhật DOM khi dữ liệu thay đổi
  - Hủy đối tượng
- Các giao đoạn trên tương ứng với các Hooks:
  - beforeCreate
  - created
  - beforeMount
  - mounted
  - beforeUpdate
  - updated
  - beforeDestroy
  - destroyed

### Giai đoạn khởi tạo

- `beforeCreate`:
  - Sẽ chạy mỗi khi khởi tạo 1 instance. Tại thời điểm này data, event chưa được thiết lập.
  - Luôn được gọi và gọi đầu tiên.
- `created`:
  - Được chạy khi data, event được thiết lập.
  - Có thể xử lý dữ liệu trả về từ `beforeCreate`.
  - Không thể thực hiện thao tác với DOM tại bước này.

Ví dụ:

```js
new Vue({
  el: "#app",
  data: {
    content: "Lifecycle Hooks",
  },
  beforeCreate() {
    console.log("before create");
    console.log(this.content);
  },
  created() {
    console.log("created");
    console.log(this.content);
  },
});
```

Kết quả hiển thị:

```
  before create
  undefined
  created
  Lifecycle Hooks
```

### Giai đoạn gắn kết DOM

- `beforeMount`:
  - Sẽ chạy sau khi data, event được thiết lập và trước khi gắn kết vào DOM.
  - Tại giao đoạn này chúng ta vẫn chưa truy cập được phần tử trong DOM.
- `mounted`:
  - Giai đoạn này chúng ta được phép truy cập vào các phần tử trong DOM.

Ví dụ:

```js
new Vue({
  el: "#app",
  data: {
    content: "Lifecycle Hooks",
  },
  beforeMount() {
    console.log("before mount");
    console.log(this.$el.textContent);
  },
  mounted() {
    console.log("mounted");
    console.log(this.$el.textContent);
  },
});
```

Kết quả hiển thị:

```
  before mount
  {{ content }}
  mounted
  Lifecycle Hooks
```

### Giai đoạn cập nhật DOM khi dữ liệu thay đổi

- `beforeUpdate`:
  - Sẽ chạy trước khi sự kiện update trên Component bắt đầu.
  - Sau khi đối tượng đã được gắn vào DOM, khi data thay đổi và trước khi render, patch lại và hiển thị ra cho người dùng.
- `updated`:
  - Chạy ngay sau beforeUpdate.
  - Sử dụng khi cần truy cập DOM sau khi thay đổi thuộc tính.
  - Dữ liệu ở `beforeUpdate` và `updated` là như nhau.

### Giai đoạn hủy instance

- `beforeDetroy`:
  - Là giai đoạn trước khi instance bị hủy.
  - Đây là nơi để quản lý tài nguyên, xóa tài nguyên, dọn dẹp các component.
- `detroyed`:
  - Ở giai đoạn này mọi thành phần đã được hủy bỏ hết.
