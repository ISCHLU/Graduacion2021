import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';
import { AnuarioComponent } from './anuario/anuario.component';
import { GraduadosComponent } from './graduados/graduados.component';
import { InvitacionesComponent } from './invitaciones/invitaciones.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [

  {path: 'actividades-graduacion',component: ActividadesComponent},
  { path: 'anuario-graduacion',component: AnuarioComponent},
  { path: 'graduados-graduacion',component: GraduadosComponent},
  { path: 'invitaciones-graduacion',component: InvitacionesComponent},
  { path: 'video-graduacion',component: VideoComponent},
  { path: 'anuario-graduacion',component: AnuarioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
