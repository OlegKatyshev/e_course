import $ from '@core/Dom.js';

export function resize(resizerElement) {

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

        if(type == 'col') {

            parent.css({width: value});
            childs_colums.forEach(el => el.css({width: value}))
            resizer.css({opacity: 0, bottom: 0, right: 0});
        }
        else{
            parent.css({height: value});
            resizer.css({opacity: 0, bottom: 0, right: 0});
        }
    };
}