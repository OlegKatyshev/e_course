
class Dom {

    constructor(selector){
        this.el = (typeof selector ==='string') ? document.querySelector(selector) : selector;
    }

    html(html){
        if(html){
            this.el.innerHTML = html;
            return this;
        }
        return this.el.outerHTML.trim();
    }

    clear(){
        this.html();
        return this;
    }

    removeEvent(event, callback){
        this.el.removeEventListener(event, callback);
    }

    on(event, callback){
        this.el.addEventListener(event, callback);
    }

    append(node){

        if( node instanceof Dom) node = node.el;

        if(Element.prototype.append){
            this.el.append(node);
        }
        else{
            this.el.appendChild(node);
        }
        return this;
    }
}

function $ (selector) {
    return new Dom(selector);
}

$.createEl = (tag, classes) => {

    const el = document.createElement(tag);
    if(classes){
        el.classList.add(classes)
    }
    return $(el);
}

export default $;