import ExcelComponent from "@core/ExcelComponent";

export default class Toolbar extends ExcelComponent {

    static className = 'excel__toolbar';

    constructor(root,options){
        super(root, {
            name: 'Toolbar',
            listeners: [],
            ...options,
        });
    }

    toHTML(){
        return `<div class="btn">
                    <i class="fas fa-align-left"></i>
                </div>
                <div class="btn">
                    <i class="fas fa-align-center"></i>
                </div>
                <div class="btn">
                    <i class="fas fa-align-right"></i>
                </div>
                <div class="btn">
                    <i class="fas fa-bold"></i>
                </div>
                <div class="btn">
                    <i class="fas fa-italic"></i>
                </div>
                <div class="btn">
                    <i class="fas fa-underline"></i>
                </div>`;
    }
}