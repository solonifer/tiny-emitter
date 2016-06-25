declare module "tiny-emitter" {
  class EventEmitter {
    new(...args:any[]): EventEmitter;
    on   (event: string, callback: Function, ctx?: any): EventEmitter;
    once (event: string, callback: Function, ctx?: any): EventEmitter;
    emit (event: string, ...args: any[]): EventEmitter;
    off  (event: string, callback?: Function): EventEmitter;
  }
  export = EventEmitter
}
