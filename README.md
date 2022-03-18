# Demo Babel, Express, Socketio, Mongoose

## [Nodejs Socketio CRUD - Video tutorial](https://www.youtube.com/watch?v=zWax5QCWCXM)

## [Socket.io Nodejs Mongodb CRUD | Aplicación en tiempo real con websockets - New Video tutorial](https://www.youtube.com/watch?v=MYqpw0P31ms)

## Install Dev Dependencies

```bash
npm i -D nodemon
npm i -D @babel/core @babel/node @babel/cli @babel/preset-env
```

## Scripts

```bash
"scripts": {
  "build": "babel src/ -d dist/ --copy-files",
  "start": "node dist/index.js",
  "babe-node": "babel-node src/index.js",
  "dev": "nodemon src/index.js --exec ./node_modules/.bin/babel-node"
}
```

## Babel for production

```bash
npm i @babel/runtime
npm i -D @babel/plugin-transform-runtime
```

```js
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ],
  "ignore": [
    "src/public/**/*.js"
  ]
}
```

## Install Dependencies 2

```bash
npm i dotenv express socket.io mongoose
npm i -D @types/express @types/socket.io @types/mongoose
```

## Configure dotenv (config.js)

```js
import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
```

```js
import { PORT } from './config'
```
