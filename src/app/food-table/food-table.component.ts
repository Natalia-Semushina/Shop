
import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog/dialog-content";
import {MatPaginator} from "@angular/material/paginator";
import {PaginatorComponent} from "../paginator/paginator.component";



export interface TableElement {
 name: string;
 position: number;
 quantity: number;
 price: number;
}



@Component({
  selector: 'food-table',
  templateUrl: './food-table.component.html',

})
export class FoodTableComponent extends PaginatorComponent{
  displayedColumns = ['position', 'name', 'quantity', 'price', 'action'];

  @Input() dataSource: TableElement[];
  @Input() params: DefaultParams;

  @Output() paramsChange: EventEmitter<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;


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

}

