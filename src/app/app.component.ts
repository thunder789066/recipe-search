import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipes';
  food = '';
  hits = [];

  constructor(private _http: HttpClient) {}

  submit() {
    let url: string;
    url = "https://api.edamam.com/search";
    url += "?q=" + this.food;
    url += "&app_id=d3d557b4";
    url += "&app_key=031c118d4e74959a469b02eb8cc24ca4";
    url += "&from=0";
    url += "&to=5";

    //console.log(url);

    this._http.get(url)
      .subscribe((data: any) => {
        this.hits = data.hits;
        console.log(this.hits);
        //console.log(data);
      });
  }
}
