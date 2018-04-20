import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Observable} from 'rxjs/Observable' 
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'


@Injectable()
export class HttpService {
  public baseUrl: string = "https://anapioficeandfire.com/api"
  constructor(private _http : HttpClient) { 

  }

  public getAllBooks(){
    let myResponse = this._http.get("https://www.anapioficeandfire.com/api/books")
    return myResponse
  }

  public getAllCharacters(){
    let myResponse = this._http.get("https://anapioficeandfire.com/api/characters")
    return myResponse
  }

  public getAllHouses(){
    let myResponse = this._http.get("https://anapioficeandfire.com/api/houses")
    return myResponse
  }

  public getItem(id,itemType){
    let myResponse = this._http.get(`https://anapioficeandfire.com/api/${itemType}/${id}`)
    return myResponse
  }

}
