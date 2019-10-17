import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class SearchService {
  searchValue$: Subject<string> = new Subject();

  getSearchValue():Observable<any> {
    return this.searchValue$.asObservable();
  }

  search(queryValue: string) {
    this.searchValue$.next(queryValue);
  }
}
