
export function createSotre(rootReducer, iniState = {}) {

     let state = rootReducer({...iniState}, {type: '_INIT_'});
     let listeners = [];

     return {
         subscribe (fn) {

             listeners.push(fn);

             return {
                 unsubscribe () {
                     listeners = listeners.filter( l => l !== fn);
                 }
             }
         },

         dispatch (action) {
             state = rootReducer(state, action);
             listeners.forEach( listener => listener(state) )
         },

         getState () {
             return state;
         },
     }
}