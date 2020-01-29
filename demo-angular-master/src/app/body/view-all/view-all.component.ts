import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ViewallService } from 'src/app/viewall.service';
import {MovieDB} from '../../movieDB';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(private route:Router,private viewAllService:ViewallService,private router:ActivatedRoute) { }
  now=new Date();
  public moviesDB : MovieDB={
    id:1,
    title:'',
    language:'',
    comments:'',
    releaseDate:'',
    poster_path:'',
    adult:false,
    overview:'',
    genre_ids:[],
    original_title:'',
    backdrop_path:'',
    popularity:0,
    vote_count:0,
    video:false,
    vote_average:0
  };
  ngOnInit() {
    this.viewAllService.getMoviesDB().subscribe(data => this.moviesDB = data)
    
  }
  comments=""
  date=new Date();
  update(movie){
    var m={
      "id":movie.id,
      "title": movie.title,
      "language":movie.original_language,
      "comments":movie.comments,
       "releaseDate":this.date.toDateString,
      "poster_path":movie.poster_path,
    "adult":movie.adult,
    "overview":movie.overview,
   // "releaseDate":movie.release_date,
    "genre_ids":movie.genre_ids,
    "backdrop_path":movie.backdrop_path,
    "popularity":movie.popularity,
    "vote_count":movie.vote_count,
    "video":movie.video,
    "vote_average":movie.vote_average
  }
  this.viewAllService.putMoviesDB(m).subscribe(data => this.moviesDB = data)
    
   // this.route.navigate(['/add',{id:movie.id,title:movie.title,lan:movie.original_language,date:movie.release_date}]);
  }
  delete(movie){
    var m={
      "id":movie.id,
      "title": movie.title,
      "language":movie.original_language,
      "comments":movie.comments,
       "releaseDate":this.date.toDateString,
      "poster_path":movie.poster_path,
    "adult":movie.adult,
    "overview":movie.overview,
   // "releaseDate":movie.release_date,
    "genre_ids":movie.genre_ids,
    "backdrop_path":movie.backdrop_path,
    "popularity":movie.popularity,
    "vote_count":movie.vote_count,
    "video":movie.video,
    "vote_average":movie.vote_average
  }
  this.viewAllService.deleteMoviesDB(m).subscribe(data => this.moviesDB = data)
    
   // this.route.navigate(['/add',{id:movie.id,title:movie.title,lan:movie.original_language,date:movie.release_date}]);
  }
  

}
