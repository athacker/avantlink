import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatPaginatorModule, MatSnackBarModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AngularFontAwesomeModule} from 'angular-font-awesome';


@NgModule({
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule
  ],
  declarations: [],
  exports: [
    AngularFontAwesomeModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
