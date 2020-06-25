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
}

export const initialState = storage('excel-state') ? storage('excel-state') : defState;