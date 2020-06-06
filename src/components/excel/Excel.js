import $ from '@core/Dom.js';

export default class Excel {

    constructor(selector, options){

        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot(){
        const root = $.createEl('div', 'excel');

        this.components = this.components.map(( Component ) => {

            const el = $.createEl('div', Component.className);
            let component = new Component(el);
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
}