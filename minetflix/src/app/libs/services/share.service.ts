import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ShareService {

  private movie: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  set value(val: string) {
    this.movie.next(val);
  }

  get valueOf(): Observable<string> {
    return this.movie.asObservable();
  }

  get data() {
    return this.movie.value;
  }

}
