import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {
  movies = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
  	this._data.getMovies(this.movies);
  	// this.movies=this._data.samplearray();
  }

}
