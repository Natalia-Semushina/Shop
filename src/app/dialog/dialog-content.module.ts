import {NgModule} from "@angular/core";
import {DialogContentComponent} from "./dialog-content";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  declarations: [DialogContentComponent]
})
export class DialogContentModule{}
