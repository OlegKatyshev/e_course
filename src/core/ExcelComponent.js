import DomListener from "@core/DomListener.js";

export default class ExcelComponent extends DomListener {

    constructor(root, options = {}){
        super(root, options.listeners);
        this.name = options.name;
        this.emitter = options.emitter;
        this.unsubscribers = [];
        this.prepare();
    }

    prepare(){}

    toHTML(){
        return '';
    }

    // Уведомляем слушателей о событиях
    $emit(event, ...args){
        this.emitter.emit(event, ...args);
    }

    // Подписываемся на события
    $on(event, fn){
        this.unsubscribers.push(
            this.emitter.subscribe(event, fn)
        );
    }

    init(){
        this.initDomListeners();

    }
    destroy(){
        this.removeDomListeners();
        this.unsubscribers.forEach( fn => fn() );
    }
}