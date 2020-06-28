import Page from "./Page";
import $ from '@core/Dom.js';
import {storage} from '@core/utils.js';

export default class Dashboard extends Page{


    listItem(key){
        
        const model = storage(key);
        const date = new Date(model.dateOpen).toLocaleDateString();
        const time = new Date(model.dateOpen).toLocaleTimeString();
        key = key.split(':');

        return `<li class="record">
                   <a href="/#${key[0]}/${key[1]}">${model.title}</a>
                   <strong>${date} ${time}</strong>
               </li>`;
    }

    getAllKeys(){

        const keys = [];

        for (let i=0; i< localStorage.length; i++){
            let key = localStorage.key(i);
            if(key.includes('excel')){
                keys.push(key);
            }
        }
        return keys;
    }

    getRecordsTable(){
        const keys = this.getAllKeys();
        if(!keys.length) return `<h2>Список таблиц пуст</h2>`;

        return `<div class="list-header">
                    <span>Название</span>
                    <span>Дата открытия</span>
                </div>
                <ul class="list">
                    ${keys.map(this.listItem).join('')}
                </ul>`;
    }

    getRoot(){

       const newid = Date.now().toString();

       return $.createEl('div', 'db').html(
            `<div class="db__header">
                <h1>Excel Dashboard</h1>
            </div>
            <div class="db__new">
                <div class="view">
                    <a href="#excel/${newid}" class="db-create">Новая <br/> таблица</a>
                </div>
            </div>
            <div class="db__table view">
                ${this.getRecordsTable()}
            </div>`
       );
    }
}