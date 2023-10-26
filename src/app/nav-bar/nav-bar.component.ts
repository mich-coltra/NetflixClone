import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../shared/shared.service";
import {Location} from "@angular/common";
import {Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public currentPath: string[] = [];

  constructor(private shared: SharedService,
              private location: Location,
              private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentPath = this.shared.getCurrentPath().split('/')
    });
  }

  ngOnInit() {
  }


}
