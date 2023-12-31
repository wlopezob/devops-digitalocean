import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/libs/services/movies.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  movie: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.moviesService.getByID(id).subscribe(res => {
      this.movie = res;
    });
  }

}
