import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './micro/admin/admin.component';
import { ComunicadosComponent } from './micro/comunicados/comunicados.component';
import { VisitasComponent } from './micro/visitas/visitas.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'comunicados', component: ComunicadosComponent  },
  { path: 'visitas', component: VisitasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
