import ExcelComponent from "@core/ExcelComponent";
import {createTable} from "./table_tml";
import $ from '@core/Dom.js';
import {resize} from "./resize.js"

export default class Table extends ExcelComponent {

    static className = 'excel__table';

    constructor(root){
        super(root, {
            name: 'Table',
            listeners: ['mousedown']
        });
    }

    onMousedown(e){
        if(e.target.dataset.resize){
            resize(e.target);
        }
    }

    toHTML(){
        return createTable();
    }

}