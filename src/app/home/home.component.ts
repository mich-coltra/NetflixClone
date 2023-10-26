import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Movie} from "../../models/movie";
import {SharedService} from "../shared/shared.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('videoHeroElm') videoHeroElm: ElementRef | undefined;

  public movies: Movie[] | null = null;
  public videoHero: {
    isMuted: boolean;
    videoElm: ElementRef | undefined;
    showBtnMute: boolean;
    showBtnPause: boolean;
    showBedgeMinAge: boolean,
    isPaused: boolean} = {isMuted: true, videoElm: undefined, showBtnMute: true, showBtnPause: false, showBedgeMinAge: true, isPaused: false};

  constructor(public shared: SharedService) {
  }

  ngOnInit() {
    this.getMovies();
  }
  ngAfterViewInit() {

    //inizializzo video hero
    this.videoHero =  {
      isMuted: true,
      videoElm: this.videoHeroElm,
      showBtnMute: true,
      showBtnPause: true,
      showBedgeMinAge: true,
      isPaused: false
    };
  }
  //============================= ---> Gestione Lista video
  public getMovies() {
    this.shared.getMoviesList().subscribe(
      data => {
        this.movies = data;
        console.log(this.movies)
      }
    );
  }

  //============================= ---> Gestione video hero
  togglePlay() {
    if(this.videoHero != undefined && this.videoHero.videoElm != undefined){
      this.videoHero.isPaused = !this.videoHero.isPaused;
      if(this.videoHero.videoElm.nativeElement.paused)
        this.videoHero.videoElm.nativeElement.play()
      else
        this.videoHero.videoElm.nativeElement.pause()
    }
  }
  toggleMute() {
    this.videoHero.isMuted = !this.videoHero.isMuted;
  }

  //============================= --->
  //============================= --->
  //============================= --->
  //============================= --->
  //============================= --->
  //============================= --->

}
