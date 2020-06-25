import {TABLE_RESIZE, CHANGE_TEXT, CURRENT_STYLE, APPLY_STYLE, CHANGE_TITLE} from './types.js';

export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data
    }
}

export function changeText(data) {
    return {
        type: CHANGE_TEXT,
        text: data.text,
        id: data.id
    }
}

export function changeCurrentStyles(data) {
    return {
        type: CURRENT_STYLE,
        data
    }
}

export function applyStyle(data) {
    return {
        type: APPLY_STYLE,
        data
    }
}

export function changeTitle(title) {
    return {
        type: CHANGE_TITLE,
        title
    }
}