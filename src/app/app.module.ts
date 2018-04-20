import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { BooksComponent } from './components/view-item/books/books.component';
import { CharactersComponent } from './components/view-item/characters/characters.component';
import { HousesComponent } from './components/view-item/houses/houses.component';
import { FilterDataService } from './services/filter-data.service';

//Import services


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewItemComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'home', component : HomeComponent},
      {path : '', redirectTo : 'home', pathMatch : 'full'},
      {path : 'Book/:id', component :BooksComponent},
      {path : 'Character/:id', component :CharactersComponent},
      {path : 'House/:id', component :HousesComponent}
    ])
  ],
  providers: [
    HttpService,
    FilterDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

