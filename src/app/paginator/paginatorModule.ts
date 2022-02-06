import {NgModule} from "@angular/core";
import {PaginatorComponent} from "./paginator.component";
import {MatPaginator} from "@angular/material/paginator";

@NgModule() // @ts-ignore
{
  imports: [MatPaginator],
  declarations: [PaginatorComponent]
}
export class PaginatorModule{}
