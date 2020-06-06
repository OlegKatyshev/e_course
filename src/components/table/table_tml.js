const COD = {
    A:65,
    Z:90,
};

function createRow(index, content) {
    return `<div class="row">
                <div class="row-info">${index ? index : ''}</div>
                <div class="row-data">${content}</div>
            </div>`;
}

function createColumn(el) {
    return `<div class="column">${el}</div>`;
}

function createCell() {
    return `<div class="cell" contenteditable="true"></div>`;
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
            .map(createCell)
            .join('');

        rows.push(createRow(i+1, cells));
    }

    return rows.join('');
}