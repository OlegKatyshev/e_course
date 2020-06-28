import {storage} from "@core/utils";
import {toolbarInitialState} from '@/components/toolbar/toolbarInitialState.js';

const defState = {
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    title:'New Table',
    currentStyles: toolbarInitialState,
    dateOpen: new Date().toJSON()
}

//export const initialState = storage('excel-state') ? storage('excel-state') : defState;

export function initialState(name) {
    return (storage(name)) ? storage(name) : defState;
}