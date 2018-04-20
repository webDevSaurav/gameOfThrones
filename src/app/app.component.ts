import { Component, OnInit } from '@angular/core';
import { FilterDataService } from './services/filter-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public filterdata : FilterDataService){
  }

  ngOnInit(){
    this.filterdata.category = "all"
  }
  filterList(e){
    this.filterdata.filterString = e.srcElement.value
  }

  setCategory(category){
    this.filterdata.category = category
  }
}
