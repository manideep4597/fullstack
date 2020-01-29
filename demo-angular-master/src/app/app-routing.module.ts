import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllComponent } from './body/view-all/view-all.component';
import { DetailsComponent } from './body/details/details.component';
import { SearchdumbComponent } from './header/searchdumb/searchdumb.component';
import { HeadercomponentComponent } from './header/headercomponent/headercomponent.component';
const routes: Routes = [
  {path:'IMDB',component:DetailsComponent},
    {path:'viewAll',component:ViewAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComp=[ViewAllComponent,DetailsComponent]