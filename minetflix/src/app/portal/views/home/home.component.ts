import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/libs/services/sesion.service';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/libs/services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string;
  movieSearch: string;

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.user = this.sesionService.user;
  }

  search() {
    this.shareService.value = this.movieSearch;
    this.router.navigateByUrl(`/search?q=${this.movieSearch}`);
  }

}
