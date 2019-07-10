import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NewsapiService {
  api_key = 'e60de63ee94e40b28c84433f959b3627';


  constructor(private http: HttpClient) { }

  getArticlesTechnology(): Observable<any> {
    return this.http
    .get(
      'https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=' +
        this.api_key
    )
    .pipe(map((data: any) => data.articles));
  }

  getArticlesJavaScript(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/everything?q=javascript&sortBy=latest&apiKey=' +
          this.api_key
      )
      .pipe(map((data: any) => data.article));
  }
}
