import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";


import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { AnuarioComponent } from './anuario/anuario.component';
import { InvitacionesComponent } from './invitaciones/invitaciones.component';
import { GraduadosComponent } from './graduados/graduados.component';
import { VideoComponent } from './video/video.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ActividadesComponent,
    AnuarioComponent,
    InvitacionesComponent,
    GraduadosComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
