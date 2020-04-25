# router-decorator-ts
🚊 my router decorator implemented in typescript

## Get Started

### install

```bash
npm i router-decorator-ts
# or
yarn add router-decorator-ts
```

### use

#### TLDR;

https://github.com/ScarboroughCoral/router-decorator-ts/tree/master/example

#### Example

```ts HelloController.ts
// HelloController.ts
import { get, controller } from '../../src/decorator'
import { Request, Response } from 'express';
@controller
class HelloController {
  @get('/hello')
  hello(req: Request, res: Response) {
    res.json({
      data: 'hello'
    })
  }
}

```

```ts index.ts
// index.ts
import express from "express";
import './controller/HelloController';
import { router } from '../src/decorator'


const app = express();
app.use(router);

app.listen(7001, () => {
  console.log('server is running...');
});
```