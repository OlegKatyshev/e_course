import '@fortawesome/fontawesome-free/js/all.js';
import "./scss/style.scss";
import Router from "@core/routes/Router.js";
import Dashboard from "@core/page/Dashboard.js";
import ExcelPage from "@core/page/ExcelPage.js";

new Router('#app',{
    dashboard: Dashboard,
    excel: ExcelPage,
});
