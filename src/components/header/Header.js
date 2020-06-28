import ExcelComponent from "@core/ExcelComponent";
import $ from '@core/Dom.js';
import * as actions from '@/redux/actions.js';
import ActiveRoute from "@core/routes/ActiveRoute.js";

export default class Header extends ExcelComponent {

    static className = 'excel__header';

    constructor(root, options) {

        super(root, {
            name: 'Header',
            listeners: ['input','click'],
            ...options,
        });
    }

    onInput(e) {
        const target = $(e.target);
        this.$dispatch(actions.changeTitle(target.text()))
    }

    onClick(e) {

        const target = $(e.target);

        if(target.data.btn ==="remove" || target.parent.data.btn ==="remove" ){

            const decision = confirm('Подтвердить удаление таблицы');
            if(decision){
                localStorage.removeItem(`${ActiveRoute.param[0]}:${ActiveRoute.param[1]}`);
                ActiveRoute.navigate('');
            }
        }
        else if (target.data.btn ==="exit" || target.parent.data.btn ==="exit" ) {
            ActiveRoute.navigate('');
        }
    }

    toHTML(){
        let title = this.store.getState().title;
        return `<input type="text" class="input" value="${title}" />
                <div>
                    <div class="btn" data-btn="remove">
                        <i class="far fa-trash-alt" data-btn="remove"></i>
                    </div>
                    <div class="btn" data-btn="exit">
                        <i class="fas fa-sign-out-alt" data-btn="exit"></i>
                    </div>
                </div>`;
    }
}