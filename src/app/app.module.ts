import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PolizaListComponent } from './poliza-list/poliza-list.component';
import { PolizaDetailComponent } from './poliza-detail/poliza-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { PolizaService} from '../service/poliza-service.service';
import { TomadorService} from '../service/tomador-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PolizaListComponent,
    PolizaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PolizaService, TomadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
