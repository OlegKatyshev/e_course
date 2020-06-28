import {TABLE_RESIZE, CHANGE_TEXT, APPLY_STYLE, CURRENT_STYLE, CHANGE_TITLE, UPDATE_DATE} from './types.js';

export function rootReducer(state, action) {

    let prevState;

    switch (action.type){
        case TABLE_RESIZE:
            const field = action.data.type + 'State';
            prevState = state[field];
            prevState[action.data.id] = action.data.value;
            return {...state, [field]: prevState };

        case CHANGE_TEXT:
            prevState = state['dataState'];
            prevState[action.id] = action.text;
            return {...state, currentText: action.text, id: action.id, dataState: prevState};

        case CURRENT_STYLE:
            return {...state, currentStyles: action.data};

        case APPLY_STYLE:

            prevState = state['stylesState'];
            action.data.ids.forEach( id => {
                prevState[id] ={...prevState[id], ...action.data.value}
            });

            return {
                ...state,
                currentStyles: {...state.currentStyles, ...action.data.value},
                stylesState: prevState,
            };

        case CHANGE_TITLE:
                return {...state, title: action.title};

        case UPDATE_DATE:
            return {...state, dateOpen: new Date().toJSON()};

        default: return state;
    }
}