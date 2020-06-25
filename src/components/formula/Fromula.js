import ExcelComponent from "@core/ExcelComponent";
import $ from '@core/Dom.js';

export default class Formula extends ExcelComponent {

    static className = 'excel__formula';

    constructor(root, options){
        super(root, {
            name: 'Formula',
            listeners: ['input','keydown'],
            subscribe: ['currentText'],
            ...options,
        });
    }

    onInput(e){
       this.$emit('formula:input', $(e.target).text());
    }

    onKeydown(e){
        const keys = ['Enter','Tab'];
        if(keys.includes(e.key)) {
            e.preventDefault();
            this.$emit('formula:focus');
        }
    }

    storeChange({currentText}){
        this.$formula.text(currentText);
    }

    init(){
        super.init();
        this.$formula = this.root.child('[data-type="input"]');
        this.$on('table:select', (cell) => {

            this.$formula.text(cell.data.value)
        });

    }

    toHTML(){
        return `<div class="info">fx</div>
                <div class="input" contenteditable="true" spellcheck="false" data-type="input"></div>`;
    }

}