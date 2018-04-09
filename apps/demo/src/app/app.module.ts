import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';

import { NgxFormControlsModule } from 'ngx-form-controls';
import { NgxFormControlsAggridModule } from 'ngx-form-controls-aggrid';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormControlsModule,
    NgxFormControlsAggridModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
