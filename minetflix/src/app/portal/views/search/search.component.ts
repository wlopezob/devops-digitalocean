import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/libs/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from 'src/app/libs/services/share.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  nameMovie: string;
  movies = [];
  total: number; // total de elementos
  page: number; // Página actual
  pages: number; // total de páginas
  loading: boolean;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shareService: ShareService
  ) { }

  ngOnInit() {
    // this.nameMovie = this.activatedRoute.snapshot.queryParamMap.get('q');
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.nameMovie = params.get('q');
      this.movies = [];
      this.page = 1;
      this.search();
    });
  }

  ngOnDestroy() {
    console.log('destroy search');
    this.shareService.value = null;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (window.scrollY + document.documentElement.offsetHeight + 10 >= document.documentElement.scrollHeight) {
      if (!this.loading) {
        this.more();
      }
    }
  }

  search() {
    this.loading = true;
    this.moviesService.get(this.nameMovie, this.page).subscribe(res => {
      // console.log(res);
      this.loading = false;
      const movies = res.Search || [];
      this.movies = [...this.movies, ...movies];
      // this.movies = this.movies.concat(movies);
      this.total = res.totalResults || 0;

      // paginacion
      this.pages = Math.ceil(this.total / 10);
    });
  }

  more() {
    if (this.page < this.pages) {
      this.page++;
      this.search();
    }
  }

  selection(movie) {
    this.router.navigateByUrl(`/watch/${movie.imdbID}`);
  }

}
