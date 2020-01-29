import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
//import { ViewAllComponent } from './view-all/view-all.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,MatGridListModule
  ],
  declarations: [],
  exports:[MatCardModule,MatGridListModule]
})
export class BodyModule { }
