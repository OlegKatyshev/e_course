const COD = {
    A:65,
    Z:90,
};

function createRow(index, content) {

    const resize = (index) ? `<div class="row-resize" data-resize="row"></div>` : '';

    return `<div class="row" data-type="resizeble">
                <div class="row-info">
                    ${index ? index : ''}
                    ${resize}
                </div>
                <div class="row-data">${content}</div>
            </div>`;
}

function createColumn(el,index) {
    return `<div class="column" data-type="resizeble" data-col=${index}>
                ${el}
                <div class="col-resize" data-resize="col"></div>
            </div>`;
}


function toCell(row) {
    return (_, col) => `<div class="cell" contenteditable="true" data-type="cell" data-col=${col} data-id =${row}:${col}></div>`;
}

function toChar(_,i) {
    return String.fromCharCode(COD.A + i);
}

export function createTable(rowCnt = 15) {

    const columCnt = COD.Z - COD.A + 1;
    const rows = [];

    const colums = new Array(columCnt).fill('')
        .map( toChar )
        .map( createColumn )
        .join('');
    rows.push(createRow(null, colums));

    for (let i = 0; i < rowCnt; i++){

        const cells = new Array(columCnt).fill('')
            .map(toCell(i))
            .join('');

        rows.push(createRow(i+1, cells));
    }

    return rows.join('');
}