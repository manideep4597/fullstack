import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Movies } from '../../movie';
import { SearchdataService } from './../searchdata.service';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {

 
  public movies : Movies={
    page:1,
    results:[],
    total_results:1,
    total_pages:1
  };
    constructor(private searchdataService: SearchdataService) { }
    ngOnInit() {
     
    }
  @Output() sendToApp =new EventEmitter<Movies>();
  onReceiving(movie:Movies){
    this.movies=movie;
    this.sendToApp.emit(this.movies);
  }

}
