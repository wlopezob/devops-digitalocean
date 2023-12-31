import { NgModule } from "@angular/core";
import { AuthenticatedGuard } from './authenticated.guard';
import { SesionService } from '../services/sesion.service';

@NgModule({
    providers: [
        AuthenticatedGuard,
        SesionService
    ]
})
export class AppGuardsModule { }
