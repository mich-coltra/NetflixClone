import { Component } from '@angular/core';
import {Movie} from "../../models/movie";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public movies: Movie[] | null = null;

  constructor() {
  }


}
