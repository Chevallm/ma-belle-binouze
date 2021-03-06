import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: ListeComponent },
  { path: 'detail', component: DetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
