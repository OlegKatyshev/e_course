import ExcelComponent from "@core/ExcelComponent";
import {toolbarInitialState} from '@/components/toolbar/toolbarInitialState.js';
import {createTable} from "./table_tml";
import TableSelection from './TableSelection.js';
import $ from '@core/Dom.js';
import parse from '@core/parse.js';
import {resize, isCell, matrix, nextSelector} from "./actions.js"
import * as actions from '@/redux/actions.js';

export default class Table extends ExcelComponent {

    static className = 'excel__table';

    constructor(root,options){
        super(root, {
            name: 'Table',
            listeners: ['mousedown','keydown', 'input'],
            ...options,
        });
    }

    resizeTable(e){
        resize(e.target).then(
            data => this.$dispatch( actions.tableResize(data) )
        );
    }

    onMousedown(e){

        if(e.target.dataset.resize){
            this.resizeTable(e);
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
                this.selectCell(target);
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
        this.updateTextInStore( $(e.target).text())
    }

    updateTextInStore (text) {

        this.$dispatch(actions.changeText({
            id: this.selection.current.id(),
            text
        }));
    }

    prepare(){
        this.selection = new TableSelection();
    }

    init(){

        super.init();
        const cell = this.root.findOne('[data-id="0:0"]');
        this.selectCell(cell);

        this.$on('formula:input', (value) => {
            this.selection.current
                .attr('data-value', value)
                .text(parse(value));

            this.updateTextInStore(value);
        });

        this.$on('formula:focus', ()=>{
            this.selection.current.focus();
        })

        this.$on('toolbar:applyStyle', (style) => {

            this.selection.applyStyle(style);
            this.$dispatch(actions.applyStyle({
                value:style,
                ids:this.selection.selectedIds
            }));
        });
    }

    selectCell(cell){
        this.selection.select(cell);
        this.$emit('table:select', cell);
        let styles = cell.getStyles(Object.keys(toolbarInitialState));
        this.$dispatch(actions.changeCurrentStyles(styles))

    }

    toHTML(){
        return createTable(15,this.store.getState());
    }
}

