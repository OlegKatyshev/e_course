import '@fortawesome/fontawesome-free/js/all.js';
import "./scss/style.scss";
import Excel from '@/components/excel/Excel.js';
import Header from "@/components/header/Header";
import Toolbar from "@/components/toolbar/Toolbar";
import Formula from "@/components/formula/Fromula";
import Table from "@/components/table/Table";
import {createSotre} from "@core/createSotre.js";
import {storage, debounce} from "@core/utils.js";
import {rootReducer} from "./redux/rootReducer.js";
import {initialState} from '@/redux/initialState.js';

const store = createSotre(rootReducer, initialState);

const stateListener = debounce(
    (state) => {
        storage('excel-state', state);
    }, 300);

store.subscribe( stateListener );

const excel = new Excel( '#app', {
    components: [Header, Toolbar, Formula, Table],
    store
});
excel.render();