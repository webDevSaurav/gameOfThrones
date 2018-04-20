import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  item 
  id
  constructor(private _route : ActivatedRoute, private router : Router, private httpService : HttpService  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get("id")
    this.httpService.getItem(this.id,"books").subscribe(
      data => {
        this.item = data
      }, 
      error => {
        console.log(error.errorMessage)
      }
    )
  }

  getCharId(character){
    let id = character.match(/\d+/)[0]
    return id;
  }

}
