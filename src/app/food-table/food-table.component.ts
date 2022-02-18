
import {Component, Input} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog/dialog-content";



export interface TableElement {
 name: string;
 position: number;
 quantity: number;
 price: number;
}



@Component({
  selector: 'food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.scss']

})
export class FoodTableComponent {
  displayedColumns = ['position', 'name', 'quantity', 'price', 'action'];


  @Input() dataSource: TableElement[];


  constructor(private dialog:MatDialog) {
   }

  openConfirmDialog(index: number){
    this.dialog.open(DialogContentComponent)
      .afterClosed()
      .subscribe(res=>this.handleRes(res, index));
  }
  handleRes (res: boolean, i: number){
    console.log('index=', i);
    console.log('result=', res)
    if (res==true){
      this.dataSource=this.dataSource.filter((element, index)=>index!=i);
    }
    console.log('массив =', this.dataSource);
  }
  ngOnInit() {
  }



}

