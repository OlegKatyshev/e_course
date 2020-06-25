import {isEqual} from '@core/utils.js';

export default class StoreSubscriber {

    constructor(store){
        this.store = store;
        this.sub = null;
        this.prevState = {};
    }

    subscribeComponents(components){

        this.prevState = this.store.getState();

        this.sub = this.store.subscribe( state => {

            Object.keys(state).forEach( (key) => {

                if(!isEqual(this.prevState[key], state[key])){

                    components.forEach((component) => {

                        if(component.isWatching(key)){

                            const changed = {[key]: state[key]};
                            component.storeChange(changed)
                        }
                    })
                }
            });
            this.prevState = this.store.getState();
        })
    }

    unsubscribeFromStore(){
        this.sub.unsubscribe();
    }
}