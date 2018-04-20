import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  item
  id
  constructor(private httpService : HttpService, private _route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this.getCharacter(this.id); // reset and set based on new parameter this time
  });
    
  }
  getCharId(character){
    let id = character.match(/\d+/)[0]
    return id;
  }
  
  getCharacter(id){
    this.httpService.getItem(this.id,"characters").subscribe(
      data => {
        this.item = data
      }, 
      error => {
        console.log(error.errorMessage)
      }
    )
  }
}
