import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FilterDataService } from '../../services/filter-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  allItems: any[] = []
  modAllItems: any[] = []
  bookComp: boolean = false
  characterComp: boolean = false
  houseComp: boolean = false
  searchString: string
  category: string
  constructor(public httpService: HttpService, public filterData: FilterDataService) { }

  ngOnInit() {
    this.httpService.getAllBooks().subscribe(
      data => {
        this.allItems = this.allItems.concat(data)
      },
      error => {
        console.log(error.errorMessage)
      }
    )
    this.httpService.getAllCharacters().subscribe(
      data => {
        this.allItems = this.allItems.concat(data)
      },
      error => {
        console.log(error.errorMessage)
      }
    )
    this.httpService.getAllHouses().subscribe(
      data => {
        this.allItems = this.allItems.concat(data)
      },
      error => {
        console.log(error.errorMessage)
      }
    )

  }
  getItemType(item) {
    let itemType = ""
    item.url.indexOf("books") != -1 ? itemType = "Book" : false
    item.url.indexOf("characters") != -1 ? itemType = "Character" : false
    item.url.indexOf("houses") != -1 ? itemType = "House" : false

    return itemType
  }

  getItemId(item) {
    let id = item.url.match(/\d+/)[0]
    return id;
  }

  setMyClasses(item) {
    let itemType = this.getItemType(item)
    let classes = {
      "bg-success": itemType == "Book" ? true : false,
      "bg-danger": itemType == "Character" ? true : false,
      "bg-info": itemType == "House" ? true : false
    }
    return classes
  }


  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  ngDoCheck() {
    this.category = this.filterData.category
    this.modAllItems = this.allItems.filter(
      (item) => {
        let itemType = this.getItemType(item).toLowerCase() + 's'
        if (this.category == "all") {
          return true
        } else if (this.category == "characters") {
          return itemType == "characters"
        } else if (this.category == "books") {
          return itemType == "books"
        } else if (this.category == "houses") {
          return itemType == "houses"
        }
      })

    if (this.filterData.filterString) {
      console.log(this.filterData.filterString)
      this.searchString = this.filterData.filterString.toLowerCase()
      this.modAllItems = this.allItems.filter((item)=>{
        let itemName = item.name ? item.name : item.aliases[0]
        itemName = itemName.toLowerCase()
        return itemName.includes(this.searchString)
      })
    }
  }
}