import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { SearchdumbComponent } from './searchdumb/searchdumb.component';
import { SearchsmartComponent } from './searchsmart/searchsmart.component';
import {HttpClientModule} from '@angular/common/http'
import {BrowserModule} from '@angular/platform-browser'
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,MatChipsModule,MatButtonModule,MatInputModule
  ],
   exports:[ HeadercomponentComponent, SearchdumbComponent, SearchsmartComponent],
  declarations: [HeadercomponentComponent, SearchdumbComponent, SearchsmartComponent]
})
export class HeaderModule { }
