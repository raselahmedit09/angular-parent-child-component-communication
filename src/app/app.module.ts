import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
  

import { AppComponent } from './app.component';
import { AddElementComponent } from './add-element/add-element.component';
import { ElementListComponent } from './element-list/element-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddElementComponent,
    ElementListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
