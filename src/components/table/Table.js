import ExcelComponent from "@core/ExcelComponent";
import {createTable} from "./table_tml";
import TableSelection from './TableSelection.js';
import $ from '@core/Dom.js';
import {resize, isCell, matrix, nextSelector} from "./actions.js"

export default class Table extends ExcelComponent {

    static className = 'excel__table';

    constructor(root,options){
        super(root, {
            name: 'Table',
            listeners: ['mousedown','keydown', 'input'],
            ...options,
        });
    }

    onMousedown(e){

        if(e.target.dataset.resize){
            resize(e.target);
        }
        else if(isCell(e.target)){

            const target = $(e.target);

            if(e.shiftKey){

                let ids = matrix(this.selection.current, target);
                let cells = ids.map( id => this.root.findOne(`[data-id="${id}"]`));
                this.selection.selectGroup(cells);
            }
            else
            {
                this.selection.select(target);
            }
        }
    }

    onKeydown(e){

        const keys = ['Enter','Tab','ArrowDown','ArrowUp','ArrowRight','ArrowLeft'];

        if(keys.includes(e.key) && !e.shiftKey){
            e.preventDefault();

            const id = this.selection.current.id(true);
            const next = this.root.findOne(nextSelector(e.key, id));
            this.selectCell(next);
        }
    }

    onInput(e){
        this.$emit('table:input', $(e.target));
    }

    prepare(){
        this.selection = new TableSelection();
    }

    init(){

        super.init();
        const cell = this.root.findOne('[data-id="0:0"]');
        this.selectCell(cell);

        this.$on('formula:input', (value) => {
            this.selection.current.text(value)
        });

        this.$on('formula:focus', ()=>{
            this.selection.current.focus();
        })

    }

    selectCell(cell){
        this.selection.select(cell);
        this.$emit('table:select', cell);
    }

    toHTML(){
        return createTable();
    }
}

