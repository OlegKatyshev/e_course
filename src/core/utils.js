export function capitalize(str) {
    if(typeof str !== 'string') return ''
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function range(start, end) {

    start = Number(start);
    end = Number(end);
    if(start > end){
        [end, start] = [start, end]
    }

    return new Array(end - start + 1)
        .fill('')
        .map((_, index) => start + index);
}

export function storage(key, data = null) {
    if(!data){
        return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(data))
}

export function isEqual(prevSt, curSt) {

    if(typeof  prevSt === 'object' && typeof  curSt === 'object'){
        return JSON.stringify(prevSt) === JSON.stringify(curSt)
    }
    return prevSt === curSt;
}

export function camelToDashCase (str) {
    return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)
}

export function toInlineStyle(style={}) {
    return Object.keys(style)
        .map( key => `${camelToDashCase(key)}: ${style[key]}`)
        .join(';');
}

export function debounce(fn, ms) {
    let timeout;

    return (...args) => {

        const later = () => {
            clearTimeout(timeout)
            fn(...args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(later, ms)
    }
    
}
