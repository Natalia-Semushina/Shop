import {Component, EventEmitter, Output} from '@angular/core';
import {TableElement} from "../food-table/food-table.component";

@Component({
  selector: 'app-add-food-form',
  templateUrl: './add-food-form.component.html',
  styleUrls: ['./add-food-form.component.scss']
})
export class AddFoodFormComponent {

  @Output() onAdd: EventEmitter<TableElement> = new EventEmitter<TableElement>()

  position: number;
  name = '';
  quantity: number;
  price: number;

  addFood(){
    if (this.position && this.name.trim() && this.quantity && this.price){
       const food: TableElement = {
          position: this.position,
          name: this.name,
          quantity: this.quantity,
          price: this.price
        }

       this.onAdd.emit(food)

      //очищение формы
       //this.position = this.name = this.quantity = this.price = null;

    }

  }
  exitAddFoodForm(){

  }
}
