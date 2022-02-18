import {Component} from '@angular/core';
import {TableElement} from "./food-table/food-table.component";

enum tableIndex {
  vegetables,
  frut,
  milk
}

const VAGETEBLES_DATA: TableElement[] = [
  {position: 1, name: 'Картошка', quantity: 10, price: 430 },
  {position: 2, name: 'Морковка', quantity: 2, price: 82},
  {position: 3, name: 'Лук', quantity: 2, price: 46},
  {position: 4, name: 'Капуста', quantity: 1, price: 70},
  {position: 5, name: 'Свекла', quantity: 2, price: 96},
  {position: 6, name: 'Перец', quantity: 2, price: 250},
  {position: 7, name: 'Помидоры', quantity: 5, price: 400},
  {position: 8, name: 'Огурцы', quantity: 3, price: 210},
  {position: 9, name: 'Редиска', quantity: 1, price: 120},
  {position: 10, name: 'Кабачки', quantity: 1.5, price: 90},
];

const FRUT_DATA: TableElement[] = [
  {position: 1, name: 'Яблоки', quantity: 10, price: 430},
  {position: 2, name: 'Груши', quantity: 2, price: 82},
  {position: 3, name: 'Сливы', quantity: 2, price: 46},
  {position: 4, name: 'Виноград', quantity: 1, price: 70},
  {position: 5, name: 'Персики', quantity: 2, price: 96},
  {position: 6, name: 'Бананы', quantity: 2, price: 250},
  {position: 7, name: 'Алыча', quantity: 5, price: 400},
  {position: 8, name: 'Абрикосы', quantity: 3, price: 210},
  {position: 9, name: 'Черешня', quantity: 1, price: 120},
  {position: 10, name: 'Вишня', quantity: 1.5, price: 90},
];

const MILC_DATA: TableElement[] = [
  {position: 1, name: 'Молоко', quantity: 5, price: 425},
  {position: 2, name: 'Кефир', quantity: 2, price: 172},
  {position: 3, name: 'Ряженка', quantity: 1, price: 65},
  {position: 4, name: 'Закваска', quantity: 1, price: 70},
  {position: 5, name: 'Йогурт', quantity: 2, price: 220},
  {position: 6, name: 'Снежок', quantity: 2, price: 140},
  {position: 7, name: 'Творог', quantity: 1, price: 300},
  {position: 8, name: 'Сметана', quantity: 1, price: 86},
  {position: 9, name: 'Тан', quantity: 2, price: 186},
  {position: 10, name: 'Айран', quantity: 1, price: 100},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fix';

  vegSource = VAGETEBLES_DATA;
  frutSource = FRUT_DATA;
  milkSource = MILC_DATA;

  showStatus = false

  selectedIndex = 0;

  updateFoods(food: TableElement){
    switch (this.selectedIndex){
      case tableIndex.milk:
        this.milkSource.push(food);
        break;
      case tableIndex.frut:
        this.frutSource.push(food);
        break;
      case tableIndex.vegetables:
        this.vegSource.push(food);
        break;
    }
    this.showStatus =! this.showStatus;
  }

}

