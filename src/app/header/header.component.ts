import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

	movies = [];
	searchMovie: string;

  constructor(private _data: DataService) { }

  ngOnInit() {
  	// this.movies = this._data.samplearray();
    
  }

  lookForMovie(){
    this._data.movie.subscribe(res => this.movies = res);
  	this.movies.push(this.searchMovie);
    this.searchMovie = "";
    this._data.getMovies(this.movies);


  }

}
