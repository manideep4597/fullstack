import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { Movies } from './movie';
import { SearchdataService } from './header/searchdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-Cruiser';
  public movies : Movies={
    page:1,
    results:[],
    total_results:1,
    total_pages:1
  };
    constructor(private searchdataService: SearchdataService) { }
    ngOnInit() {
     
    }
  onReceiving(movie:Movies){
    this.movies=movie;  
  }
  send(){
    return this.movies;
  }
}
