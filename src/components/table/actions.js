import $ from '@core/Dom.js';
import {range} from "@core/utils.js";


export function resize(resizerElement) {

    return new Promise( resolve =>{

        const resizer = $(resizerElement);
        const type = resizer.data.resize;
        const parent = resizer.closest('[data-type="resizeble"]');
        const coords = parent.getCoords();
        const childs_colums = parent.findAll(`[data-col="${parent.data.col}"]`);
        let value;
        let sidePropertyCss = (type == 'col') ? { opacity: 1, bottom:'-100vh'} : { opacity: 1, right:'-100vw'};

        resizer.css(sidePropertyCss);

        document.onmousemove = (event) => {

            if(type == 'col') {

                const delta = event.pageX - coords.right;
                value = coords.width + delta + 'px';
                resizer.css({ right: -delta+'px' });
            }
            else
            {
                const delta = event.pageY - coords.bottom;
                resizer.css({ bottom: -delta+'px' });
                value= coords.height + delta + 'px';
            }
        }

        document.onmouseup = () => {

            document.onmousemove = null;
            document.onmouseup = null;

            if(type === 'col') {

                parent.css({width: value});
                childs_colums.forEach(el => el.css({width: value}))
                resizer.css({opacity: 0, bottom: 0, right: 0});
             }
            else{
                parent.css({height: value});
                resizer.css({opacity: 0, bottom: 0, right: 0});
            }
            resolve({
                value,
                type,
                id: parent.data[type]
            })
        };
    });
}

export function isCell(el) {
    return el.dataset.type == 'cell';
}

export function matrix(cur, prev) {

    cur = cur.id(true);
    prev = prev.id(true);

    let cols = range(cur.col, prev.col);
    let rows = range(cur.row, prev.row);

    return cols.reduce( (acc, col) => {
        rows.forEach( row => acc.push(`${row}:${col}`))
        return acc;
    }, []);
}

export function nextSelector(key, {col, row}) {

    switch (key){
        case 'Enter':
        case 'ArrowDown': row++; break;
        case 'Tab':
        case 'ArrowRight': col++; break;
        case 'ArrowUp': row = ((row-1) < 0) ? 0 : row-1; break;
        case 'ArrowLeft': col = ((col-1) < 0) ? 0 : col-1; break;
    }

    return `[data-id="${row}:${col}"]`;
}