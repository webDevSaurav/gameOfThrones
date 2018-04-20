import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  item
  id 
  constructor(private httpService : HttpService, private _route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this.getHouse(this.id); // reset and set based on new parameter this time
  });
    
  }

  getHouseId(house){
    let id = house.match(/\d+/)[0]
    return id;
  }

  getCharId(character){
    let id = character.match(/\d+/)[0]
    return id;
  }

  getHouse(id){
    this.httpService.getItem(this.id,"houses").subscribe(
      data => {
        this.item = data
        console.log(data)
      }, 
      error => {
        console.log(error.errorMessage)
      }
    )
  }
}


