import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FoodTableComponent} from "./food-table.component";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DialogContentModule} from "../dialog/dialog-content.module";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [FoodTableComponent],
  imports: [CommonModule,
            MatTableModule,
            MatIconModule,
            MatButtonModule,
            DialogContentModule,
            MatPaginatorModule],
  exports: [FoodTableComponent]
})
export class FoodTableModule {

}
