import express from "express";
import './controller/HelloController';
import { router } from '../src/decorator'


const app = express();
app.use(router);

app.listen(7001, () => {
  console.log('server is running...');
});