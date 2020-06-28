import $ from '@core/Dom.js';
import Emitter from '@core/Emitter.js';
import StoreSubscriber from '@core/StoreSubscriber.js';
import * as actions from '@/redux/actions.js';

export default class Excel  {

    constructor(options){

        this.components = options.components || [];
        this.emitter = new Emitter();
        this.store = options.store;
        this.subscriber = new StoreSubscriber(this.store);
    }

    getRoot(){
        const root = $.createEl('div', 'excel');
        const componentOptions =  { emitter: this.emitter, store: this.store, };

        this.components = this.components.map(( Component ) => {

            const el = $.createEl('div', Component.className);
            let component = new Component(el, componentOptions);
            el.html(component.toHTML());
            root.append(el);

            return component;
        });

        return root;
    }

    init(){
        this.store.dispatch(actions.updateDate())
        this.subscriber.subscribeComponents(this.components);
        this.components.forEach( component => component.init() );
    }

    destroy(){
        this.subscriber.unsubscribeFromStore()
        this.components.forEach( component => component.destroy())
    }
}