import Page from "./Page";
import {createSotre} from "@core/createSotre.js";
import {storage, debounce} from "@core/utils.js";
import {rootReducer} from "@/redux/rootReducer.js";
import {initialState} from '@/redux/initialState.js';
import Excel from '@/components/excel/Excel.js';
import Header from "@/components/header/Header";
import Toolbar from "@/components/toolbar/Toolbar";
import Formula from "@/components/formula/Fromula";
import Table from "@/components/table/Table";


export default class ExcelPage extends Page{

    getRoot(){
        const nameState = this.storageName(this.params);
        const store = createSotre(rootReducer, initialState(nameState));

        const stateListener = debounce(
            (state) => {
                storage(nameState, state);
            }, 300);

        store.subscribe( stateListener );

        this.excel = new Excel({
            components: [Header, Toolbar, Formula, Table],
            store
        });

       return this.excel.getRoot();
    }

    storageName(params){
        return params.join(':');
    }

    afterRender(){
        this.excel.init();
    }

    destroy(){
        this.excel.destroy();
    }
}