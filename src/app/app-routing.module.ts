import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolizaListComponent } from './poliza-list/poliza-list.component';
import { PolizaDetailComponent } from './poliza-detail/poliza-detail.component';
 
const routes: Routes = [
  { path: 'polizas', component: PolizaListComponent },
  { path: 'polizaDetail', component: PolizaDetailComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }