export default function parse(value = '') {

    if(value.startsWith('=')){

       value = value.slice(1);
       value = (value) ? eval(value) : '';
    }

    return value;
}