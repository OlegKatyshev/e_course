import {toolbarInitialState} from '@/components/toolbar/toolbarInitialState.js';
import {toInlineStyle} from "@core/utils.js";
import parse from '@core/parse.js';

const COD = {
    A:65,
    Z:90,
};


function setRowHeight(index, rowState){
    if(rowState.hasOwnProperty(index)){
        return `style="height: ${rowState[index]}"`;
    }
    return '';
}

function setColumnWidth(index, colState){
    if(typeof colState === 'object' && colState.hasOwnProperty(index)){
        return colState[index];
    }
    return '';
}


function createRow(index, content, rowState) {

    const resize = (index) ? `<div class="row-resize" data-resize="row"></div>` : '';

    return `<div class="row" data-type="resizeble" data-row='${index}' ${setRowHeight(index, rowState)}>
                <div class="row-info">
                    ${index ? index : ''}
                    ${resize}
                </div>
                <div class="row-data">${content}</div>
            </div>`;
}

function createColumn(el, index, colState) {

    return `<div class="column" data-type="resizeble" data-col=${index}  style="width:${setColumnWidth(index, colState)}" >
                ${el}
                <div class="col-resize" data-resize="col"></div>
            </div>`;
}


function toCell(row, state) {


    return (_, col) => {

        let id = `${row}:${col}`;
        let data = state.dataState[id];
        let styles = toInlineStyle({...toolbarInitialState, ...state.stylesState[id]});

        let width = setColumnWidth(col, state.colState);
        width = (width) ? `;width:${width};` : ';';

       return `<div class="cell" style="${styles + width}" contenteditable="true" data-type="cell" data-col=${col} data-id =${id} data-value="${data || ''}">${parse(data) || ''}</div>`
    };
}

function toChar(_,i) {
    return String.fromCharCode(COD.A + i);
}

export function createTable(rowCnt = 15, state) {

    const columCnt = COD.Z - COD.A + 1;
    const rows = [];

    const colums = new Array(columCnt).fill('')
        .map( toChar )
        .map( (el, index) => createColumn(el, index, state.colState || {}) )
        .join('');
    rows.push(createRow(null, colums, {}));

    for (let i = 0; i < rowCnt; i++){

        const cells = new Array(columCnt).fill('')
            .map(toCell(i, state || {}))
            .join('');

        rows.push(createRow(i+1, cells, state.rowState || {}));
    }

    return rows.join('');
}