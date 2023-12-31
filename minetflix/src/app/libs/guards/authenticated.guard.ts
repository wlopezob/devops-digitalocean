import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(
        private router: Router,
        private sesionService: SesionService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // Validar si el usuario esta logeado
        const isLoggin: boolean = !!this.sesionService.user;

        if (!isLoggin) {
            this.router.navigateByUrl('/auth');
        }

        return isLoggin;
    }

}
