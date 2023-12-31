import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SesionService } from '../libs/services/sesion.service';
import { Router } from '@angular/router';
import { ShareService } from '../libs/services/share.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  nameMovie: string;
  flagSearch: boolean;
  @ViewChild('inputSearch', { static: false }) inputSearch: ElementRef;

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.shareService.valueOf.subscribe(value => this.nameMovie = value);
  }

  logout() {
    this.sesionService.destroy();
    this.router.navigateByUrl('/auth');
  }

  activateSearch() {
    this.flagSearch = true;
    this.cdRef.detectChanges();
    this.inputSearch.nativeElement.focus();
  }

  search() {
    // this.router.navigate(['search'], { queryParams: { q: this.nameMovie } });
    this.router.navigateByUrl(`search?q=${this.nameMovie}`);
  }

}
