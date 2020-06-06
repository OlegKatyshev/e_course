import '@fortawesome/fontawesome-free/js/all.js';
import "./scss/style.scss";
import Excel from '@/components/excel/Excel.js';
import Header from "@/components/header/Header";
import Toolbar from "@/components/toolbar/Toolbar";
import Formula from "@/components/formula/Fromula";
import Table from "@/components/table/Table";

const excel = new Excel( '#app', {components: [Header, Toolbar, Formula, Table]} );
excel.render();