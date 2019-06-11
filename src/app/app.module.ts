import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MicroModule } from './micro/micro.module';
import { HomeModule } from './micro/home/home.module';
import { AdminModule } from './micro/admin/admin.module';
import { ComunicadosModule } from './micro/comunicados/comunicados.module';
import { VisitasModule } from './micro/visitas/visitas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MicroModule,
    HomeModule,
    AdminModule,
    ComunicadosModule,
    VisitasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
