import {capitalize} from "@core/utils";


function getMethodName(event) {
    return 'on' + capitalize(event);
}

export default class DomListener {

    constructor(root, listeners = []){
        this.root = root;
        this.listeners = listeners;
    }

    initDomListeners(){

        if(this.listeners.length) {

            this.listeners.forEach( (listetner) =>{

                const method = getMethodName(listetner);
                if(this[method]) {

                    this[method] = this[method].bind(this);
                    this.root.on(listetner, this[method])
                }
                else{
                    throw new Error(`Method: ${method} undefined for component ${this.name}`)
                }
            });
        }
    }

    removeDomListeners(){
        if(this.listeners.length) {

            this.listeners.forEach( (listetner) =>{

                const method = getMethodName(listetner);
                if(this[method]) {
                    this.root.removeEvent(listetner, this[method])
                }
            });
        }
    }
}