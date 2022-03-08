# Demo Socketio, Express, Babel

Use import / export instructions...

## [Nodejs Socketio CRUD Video tutorial](https://www.youtube.com/watch?v=zWax5QCWCXM)

## Install Dev Dependencies

```bash
npm i -D @babel/core @babel/node @babel/cli @babel/preset-env
npm i -D nodemon
```

## Scripts

```bash
"scripts": {
  "build": "babel src/ -d dist/",
  "start": "node dist/index.js",
  "babe-node": "babel-node src/index.js",
  "dev": "nodemon src/index.js --exec ./node_modules/.bin/babel-node"
}
```

## Install Dependencies

```bash
npm i dotenv
```

## Configure dotenv

```js
import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
```
