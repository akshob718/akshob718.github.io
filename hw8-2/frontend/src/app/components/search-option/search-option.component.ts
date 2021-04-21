import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subject, merge, of } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter, switchMap, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


const APIKEY = "e8067bXX";

const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Component({
  selector: 'app-search-option',
  templateUrl: './search-option.component.html',
  styleUrls: ['./search-option.component.css']
})
export class SearchOptionComponent {

  @ViewChild('movieSearch') movieSearch!: NgbTypeahead;

  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  searchTermModel: any;

  id: number | undefined;
  media_type: string | undefined;

  constructor(private httpClient: HttpClient, private router: Router) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.searchGetCall(term).pipe(
          catchError(() => {
            return of([]);
          }))
      )
    )

    searchGetCall(term: string) {

      if (term === '') {
        return of([]);
      }
      return this.httpClient.get<string []>("https://myprojectfinal-310305.wl.r.appspot.com/apis571/search_multi/"+term)
      .pipe(
        map((response) => {
          //console.log(response);
          return response;
        })
      );
    }

    onSelect($event: { item: { id: number; media_type: string; }; preventDefault: () => void; }, input: { value: string; }) {
      this.id = $event.item.id;
      this.media_type = $event.item.media_type;
      $event.preventDefault();
      input.value = '';      
      console.log('/watch/'+ String(this.media_type) + '/' + String(this.id));
      this.router.navigate(['/watch/' + String(this.media_type) + '/' + String(this.id)]);
    }

}
