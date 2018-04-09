import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';

import { AggridComponent } from './components/aggrid/aggrid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  declarations: [
    AggridComponent,
  ],
  exports: [
    AggridComponent
  ]
})
export class NgxFormControlsAggridModule { }
