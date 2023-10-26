import {Injectable} from '@angular/core';
import {Location} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseUrl: string = 'assets/data/movies.json';

  constructor(private location: Location,
              private http: HttpClient) {
  }

  //#region SCRIPT
  public getCurrentPath() {
    return this.location.path();
  }
  public languageUsedByPc() {
    return navigator.language || (navigator as any).userLanguage;
  }
  public getCurrentYear() {
    return new Date().getFullYear().toString();
  }
  //#endregion

  //#region
  public getMoviesList(): Observable<any> {
    var list = [];
    for (let i=0; i<100; i++) {
      list.push(this.generateRandomMovie());
    }
    return of(list);

    //return this.http.get(this.baseUrl);
  }
  //#endregion

   getRandomInt(min:any, max:any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   getRandomBoolean() {
    return Math.random() < 0.5;
  }

   generateRandomMovie() {
    const titles = ["Stranger Things", "Breaking Bad", "Game of Thrones", "The Witcher", "The Mandalorian"];
    const tags = ["Action", "Adventure", "Drama", "Fantasy", "Sci-Fi", "Horror", "Mystery", "Thriller"];
    const cast = [
      { name: "Millie Bobby Brown", character: "Eleven" },
      { name: "Finn Wolfhard", character: "Mike Wheeler" },
      { name: "Winona Ryder", character: "Joyce Byers" },
      { name: "Bryan Cranston", character: "Walter White" },
      { name: "Kit Harington", character: "Jon Snow" }
    ];

    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomTags = Array.from({ length: this.getRandomInt(1, 4) }, () => tags[Math.floor(Math.random() * tags.length)]);
    const randomCast = Array.from({ length: this.getRandomInt(1, 5) }, () => cast[Math.floor(Math.random() * cast.length)]);

    return {
      title: randomTitle,
      tags: randomTags,
      description: "A group of characters in an unpredictable story...",
      releaseYear: this.getRandomInt(2000, 2023),
      duration: `${this.getRandomInt(1, 10)} seasons`,
      cast: randomCast,
      director: "Random Director",
      imageUrl: "https://example.com/random-image.jpg",
      trailerUrl: "https://example.com/random-trailer",
      movie: this.getRandomBoolean(),
      alreadySeen: this.getRandomBoolean(),
      views: this.getRandomInt(1000, 10000000),
      rating: (Math.random() * (5 - 1) + 1).toFixed(1),
    };
  }

}
