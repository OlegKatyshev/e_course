import ExcelComponent from "@core/ExcelComponent";

export default class Header extends ExcelComponent {

    static className = 'excel__header';

    toHTML(){
        return `<input type="text" class="input" value="новая таблица" />
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