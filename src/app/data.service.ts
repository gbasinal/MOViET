import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class DataService {
	private _url: string = "https://api.themoviedb.org/3/search/movie?api_key=9d2bff12ed955c7f1f74b83187f188ae&query=avatar";
  private movies = new BehaviorSubject<any> (['']);
  movie = this.movies.asObservable();


  	constructor(private http: HttpClient) { }
  		getMovies(movie) {
  			this.movies.next(movie);
  		}

      // getMovies1(): Observable<IMovie[]> {
      //   return this.http.get(this._url).pipe(map((res: Response) => {
      //     return <IMovie[]res.json();
      //    }))
      // }
  		// samplearray(){
  		// 	return ['s','b','c'];
  		// }
  }
