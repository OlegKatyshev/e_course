

class TableSelection {

    static selectedClass = 'selected';

    constructor(){
        this.group = [];
        this.current = null;
    }

    select(el){
        this.clear();
        el.focus().addClass(TableSelection.selectedClass);
        this.group.push(el);
        this.current = el;
    }

    clear(){
        this.group.forEach( cell => cell.removeClass(TableSelection.selectedClass));
        this.group = [];
    }

    selectGroup(group){
        this.clear();
        this.group = group;
        this.group.forEach( cell => cell.addClass(TableSelection.selectedClass));
    }

    applyStyle(style){
        this.group.forEach( el => el.css(style));
    }

    get selectedIds (){
        return this.group.map( el => el.id())
    }
}

export default TableSelection;