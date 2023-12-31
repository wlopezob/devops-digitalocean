import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { SesionService } from './sesion.service';
import { CryptoService } from './crypto.service';
import { MoviesService } from './movies.service';
import { ShareService } from './share.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        SesionService,
        CryptoService,
        MoviesService,
        ShareService
    ]
})
export class AppServicesModule { }
