import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import { Movies, Results } from 'src/app/movie';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ViewallService} from '../../viewall.service';
import {MovieDB} from '../../movieDB';
import { AppComponent } from 'src/app/app.component';
import { SearchdataService } from '../../header/searchdata.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 // movieList;
  constructor(private searchdataService: SearchdataService,private route:Router,private viewAllService:ViewallService,private appComp:AppComponent) { 
   // this.movieList=this.appComp.send();
  }
  public movieR : Results={
    poster_path:'',
    adult:false,
    overview:'',
    release_date:'',
    genre_ids:[],
    id:0,
    original_title:'',
    original_language:'',
    title:'',
    backdrop_path:'',
    popularity:0,
    vote_count:0,
    video:false,
    vote_average:0
  };
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
    //this.movieList=this.appComp.send();
  }
  comments=""
  date=new Date();
  //@Input('movieList') movieList: string;
  result=""
  gonsave(movie){
    var m={
      "id":movie.id,
      "title": movie.title,
      "language":movie.original_language,
      "comments":movie.comments,
       "releaseDate":this.date.toDateString,
      "poster_path":movie.poster_path,
    "adult":movie.adult,
    "overview":movie.overview,
    //"releaseDate":movie.release_date,
    "genre_ids":movie.genre_ids,
    "backdrop_path":movie.backdrop_path,
    "popularity":movie.popularity,
    "vote_count":movie.vote_count,
    "video":movie.video,
    "vote_average":movie.vote_average
  }
  this.viewAllService.postMoviesDB(m).subscribe(data => this.moviesDB = data)
    this.moviesDB.id?this.result="Movie Saved Successfully":this.result="plz check. Movie might already exist"
   // this.route.navigate(['/add',{id:movie.id,title:movie.title,lan:movie.original_language,date:movie.release_date}]);
  }
  public movieList : Movies={
    page:1,
    results:[],
    total_results:1,
    total_pages:1
  };
  searchbox;
  onReceiving(searchmovie:string){
    this.searchbox=searchmovie;
    this.searchdataService.getMovies(this.searchbox).subscribe(data => this.movieList = data)
  }
}
