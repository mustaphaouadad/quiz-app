import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [

    {path:'',component:HomeComponent },
    {path:'history',component:HistoryComponent}
   

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }