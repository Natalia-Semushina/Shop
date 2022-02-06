import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'paginator',
  template:'',
})
export class PaginatorComponent{


  paramsChange: EventEmitter<any>;

  orderingChangeEvent: EventEmitter<any>;
  //
  paginator: MatPaginator;
  //
  // get ordering():string{
  //   return this.params.filters && this.params.filters.ordering
  // }
  get startIndex(){
      return this.paginator.pageSize * this.paginator.pageIndex + 1;
   }
  paginatorClicked(){
    this.params.paginatorOptions.limit = this.paginator.pageSize;
    this.params.paginatorOptions.offset = this.paginator.pageIndex * this.paginator.pageSize;

    this.paramsChange.emit(this.params);
    this.orderingChangeEvent.emit(true);
  }
}
