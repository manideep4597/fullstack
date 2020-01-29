import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-searchdumb',
  templateUrl: './searchdumb.component.html',
  styleUrls: ['./searchdumb.component.css']
})
export class SearchdumbComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  searchbox="";
  @Output() sendToParent =new EventEmitter<string>();
  search(){
    console.log(this.searchbox);
    this.sendToParent.emit(this.searchbox);
  }
}
