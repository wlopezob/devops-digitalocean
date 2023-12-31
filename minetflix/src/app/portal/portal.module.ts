import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalRoutingModule } from './portal-routing.module';
import { HomeComponent } from './views/home/home.component';
import { AppServicesModule } from '../libs/services/services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './views/search/search.component';
import { WatchComponent } from './views/watch/watch.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortalRoutingModule,
    AppServicesModule
  ],
  declarations: [
    PortalComponent,
    HomeComponent,
    SearchComponent,
    WatchComponent
  ]
})
export class PortalModule { }
