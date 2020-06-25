import ExcelComponent from "@core/ExcelComponent";
import $ from '@core/Dom.js';
import * as actions from '@/redux/actions.js';

export default class Header extends ExcelComponent {

    static className = 'excel__header';

    constructor(root, options){
        super(root, {
            name: 'Header',
            listeners: ['input'],
            ...options,
        });
    }

    onInput(e){
        const target = $(e.target);
        this.$dispatch(actions.changeTitle(target.text()))
    }

    toHTML(){
        let title = this.store.getState().title;
        return `<input type="text" class="input" value="${title}" />
                <div>
                    <div class="btn">
                        <i class="far fa-trash-alt"></i>
                    </div>
                    <div class="btn">
                        <i class="fas fa-sign-out-alt"></i>
                    </div>
                </div>`;
    }
}