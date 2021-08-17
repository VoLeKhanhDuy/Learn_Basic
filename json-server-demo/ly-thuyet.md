## Cai dat

- Tao file `package.json`: `npm init`
- Tao file `.git`: `git init`
- Tao file `.gitignore`
- Cai `json-server`: `npm i json-server`
- Cai nodemon: `npm i --save-dev nodemon`
- Tao file `main.js`
- Vao github json-server tim den `Custom routes example` copy past vao `main.js`
- Viet 2 dong nay vao `script` cua file `package.json`

```json
    "dev": "nodemon main.js",
    "start": "node main.js"
```

- Cai extension `Rest Client` trong VSCode
- Tao 1 file `test.http` -> Go `GET http://localhost:3000/categories` -> Send Request
- Neu muon chinh lai URL co them `/api` thi vao file `main.js` cho~ `server.use(router)`->`server.use("/api",router)`
