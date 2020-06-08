
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

    get data(){
        return this.el.dataset;
    }

    closest(s){
        return $(this.el.closest(s));
    }

    getCoords(){
        return this.el.getBoundingClientRect();
    }

    findAll(s){
        let r = [];
        let list = document.querySelectorAll(s);

        if(list.length){
            for (let i=0; i < list.length; i++ ){
                r.push($(list[i]));
            }
        }
        return r
    }

    css(options = {}){
        for (let prop in options){
            if(this.el.style.hasOwnProperty(prop)){
                this.el.style[prop] = options[prop]
            }
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