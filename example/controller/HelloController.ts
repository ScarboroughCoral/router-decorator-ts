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