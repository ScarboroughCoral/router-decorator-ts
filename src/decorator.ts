import { Router } from 'express';
import 'reflect-metadata';
export const router = Router();

type Constructor = new (...args: any[]) => any;
type Method = "get" | "post";

export function controller(target: Constructor) {
  for (let k in target.prototype) {
    const handler = target.prototype[k];
    const path = Reflect.getMetadata('path', target.prototype, k);
    const method: Method = Reflect.getMetadata('method', target.prototype, k);
    if (handler && path && method) {
      router[method](path, handler);
    }
  }
}

class DecoratorFactory {
  static create(type: string) {
    return function (path: string) {
      return function (target: any, key: string) {
        Reflect.defineMetadata('path', path, target, key);
        Reflect.defineMetadata('method', type, target, key);
      }
    }
  }
}



export const get = DecoratorFactory.create('get');
export const post = DecoratorFactory.create('post');