import $ from '@core/Dom.js';
import Emitter from '@core/Emitter.js';

export default class Excel {

    constructor(selector, options){

        this.$el = $(selector);
        this.components = options.components || [];
        this.emitter = new Emitter();
    }

    getRoot(){
        const root = $.createEl('div', 'excel');
        const componentOptions =  { emitter: this.emitter };

        this.components = this.components.map(( Component ) => {

            const el = $.createEl('div', Component.className);
            let component = new Component(el, componentOptions);
            el.html(component.toHTML());
            root.append(el);

            return component;
        });

        return root;
    }

    render(){
        this.$el.append(this.getRoot())
        this.components.forEach( component => component.init() );
    }

    destroy(){
        this.components.forEach( component => component.destroy())
    }
}