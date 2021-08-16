# Vuex

- Dùng để quản lý Store.
- Store: là khu vực lưu trữ data, bất kỳ component nào cũng truy cập được dữ liệu từ Store.
- Dùng để giải quyết việc truyền dữ liệu giữa các component.

## Cách sử dụng

- Cài đặt Vuex: `npm install vuex --save`

- Trong file `main.js` ta import Vuex vào:

```Javascript
import Vuex from 'vuex';
Vue.use(Vuex); // Cho phép Vue sử dụng Vuex
```

- Tạo một Store:

```Javascript
const store = new Vuex.Store({
    state: { // Nơi lưu trữ trạng thái của ứng dụng
        name: "Duy"
    },
    getters: { // Lấy dữ liệu từ state
        name: (state) => state.name;
    },
    mutations: { // Là những hàm dùng để thay đổi state
        setName(state, name) { // Hàm này sẽ thay đổi giá trị của name trong state
            state.name = name;
        }
    },
    actions: { // Thường sử dụng cho việc call API, code logic xử lý
        updateProfile(context) { // context là store ở trạng thái hiện tại

            context.commit('setName', 'Võ Lê Khánh Duy')
            // Tham số đầu tiên là tên mutations
            // Tham số thứ 2 là cái payload truyền vào trên hàm mutations
        }
        /* Hoặc có thể viết theo kiểu này */
        updateProfile({ commit, getters }) {
            let name = getters.name
            context.commit('setName', 'Võ Lê Khánh Duy')
        }
    }
})

// Chú ý: thêm store vào phần new Vue()
```

- Lấy dữ liệu từ Store:
  Ở một component nào đó

```Javascript
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    methods: {
        ...mapMutations(['setName']), // Lấy hàm setName từ mutations của store về component hiện tại
        ...mapActions(['updateProfile'])
    },
    computed: {
        // Lấy ra name từ getters ở trong store
        ...mapGetter(['name']), // Chuyển store.name sang this.name

    }
}
```

## Chia file

- Tạo 1 thư mục `store`
- Tạo lần lượt các file `state.js`, `getters.js`, `mutations.js`, `actions.js` và một file `index.js`

* Ta tách store ra riêng để vào file `index.js`. Nhớ import lại store vào main.js

```Javascript
const storeConfigs = {
    state: {
        name: "Duy"
    },
    getters: {
        name: (state) => state.name;
    },
    mutations: {
        setName(state, name) {
            state.name = name;
        }
    },
    actions: {
        updateProfile({ commit, getters }) {
            let name = getters.name
            context.commit('setName', 'Võ Lê Khánh Duy')
        }
    }
}
export default storeConfigs;
```

- Và trong file `main.js`

```Javascript
import Vuex from 'vuex';
Vue.use(Vuex); // Cho phép Vue sử dụng Vuex

import storeConfigs from './store';
const store = new Vuex.Store(storeConfigs)
```

- Tiếp tục tách file `index.js`

```Javascript
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const storeConfigs = {
    state,
    getters,
    mutations,
    actions
}
export default storeConfigs;
```

- Trong các file `state.js`, `getters.js`, `mutations.js`, `actions.js`
- Ta sẽ export từng chức năng theo từng file
  VD: Trong file `state.js`. Các file còn tại tương tự

```Javascript
export default {
    name: "Duy"
}
```
