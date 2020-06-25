import ExcelSateComponent from '@core/ExcelSateComponent.js';
import {createToolbar} from './toolbar_tmpl.js';
import {toolbarInitialState} from './toolbarInitialState.js';
import $ from '@core/Dom.js';

export default class Toolbar extends ExcelSateComponent {

    static className = 'excel__toolbar';

    constructor(root,options){
        super(root, {
            name: 'Toolbar',
            listeners: ['click'],
            subscribe: ['currentStyles'],
            ...options,
        });
    }

    prepare (){
        this.initState(toolbarInitialState);
    }

    get template(){
        return createToolbar(this.state);
    }

    storeChange(changes){
        this.setState(changes.currentStyles);
    }

    onClick(e){

        const target = $(e.target);

        if(target.data.type === 'btn' || target.parent.data.type === 'btn'){

            let value = (target.data.value) ? target.data.value : target.parent.data.value;
            value = JSON.parse(value);
            this.$emit('toolbar:applyStyle',value);
        }
    }

    toHTML(){
        return this.template;
    }
}