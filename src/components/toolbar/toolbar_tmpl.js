export function createToolbar(state) {
    const btn = [
        {
            icon:'fa-align-left',
            active: state['textAlign'] === 'left',
            value: {textAlign: 'left'},
        },
        {
            icon:'fa-align-center',
            active: state['textAlign'] === 'center',
            value: {textAlign: 'center'},
        },
        {
            icon:'fa-align-right',
            active: state['textAlign'] === 'right',
            value: {textAlign: 'right'},
        },
        {
            icon:'fa-bold',
            active: state['fontWeight'] === 'bold',
            value: {fontWeight: (state['fontWeight'] === 'bold') ? 'normal' : 'bold'},
        },
        {
            icon:'fa-italic',
            active: state['fontStyle'] === 'italic',
            value: {fontStyle: (state['fontStyle'] === 'italic') ? 'normal' : 'italic'},
        },
        {
            icon:'fa-underline',
            active: state['textDecoration'] === 'underline',
            value: {textDecoration: (state['textDecoration'] === 'underline') ? 'none' : 'underline'},
        },
    ];
    return btn.map(toButton).join('');
}

function toButton(button) {

    const meta = `data-type="btn" data-value=${JSON.stringify(button.value)}`;

    return `<div ${meta} data-type="btn" class="btn  ${(button.active) ? "active" : ""}">
               <i ${meta} class="fas ${button.icon}"></i>
           </div>`;
}