import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  type : string
  id : string
  item : Object
  constructor(private _route : ActivatedRoute, private router : Router,private httpService : HttpService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get("id")
    this.type = this._route.snapshot.paramMap.get("itemType")

    this.httpService.getItem(this.id,this.type).subscribe(
      data => {
        this.item = data
      }, 
      error => {
        console.log(error.errorMessage)
      }
    )
  }

}
