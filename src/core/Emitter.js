export default class Emitter {

    constructor(){
        this.listeners = {}
    }

    // dispatch, trigger
    // Уведомляем слушателей
    // ...args = []
    emit(eventName, ...args){

        if(this.listeners.hasOwnProperty(eventName) && Array.isArray(this.listeners[eventName])) {
            this.listeners[eventName].forEach((listener) => listener(...args))
            return true;
        }
        return false;
    }

    // on, listen
    subscribe(eventName, fn){

        if(!this.listeners.hasOwnProperty(eventName)) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(fn);

        return () => {
            this.listeners[eventName] = this.listeners[eventName].filter( listener => listener !== fn)
        }
    }
}