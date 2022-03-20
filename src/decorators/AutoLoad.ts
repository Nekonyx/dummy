import { Dummy } from '../Dummy'
import { decoratorStorage } from './storage'

export interface IAutoLoadDecoratorOptions {
  dummy: Dummy
}

export interface IAutoLoadDecoratorData {
  target: Function
  dummy?: Dummy
}

export const AutoLoad =
  (opts?: IAutoLoadDecoratorOptions) => (constructor: Function) => {
    decoratorStorage.autoLoad.push({
      target: constructor,
      dummy: opts?.dummy
    })

    const dummy = opts?.dummy ?? Dummy.instances[0]

    if (dummy) {
      dummy.load(constructor)
    }
  }
