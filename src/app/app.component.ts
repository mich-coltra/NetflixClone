import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SharedService} from "./shared/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService,
              private shared: SharedService) {
    translate.addLangs(['it', 'italian']);
    translate.addLangs(['en', 'english']);
    //
    const pcLanguage = this.shared.languageUsedByPc();
    //
    translate.setDefaultLang('en');
    translate.use(pcLanguage.split('-')[0]);
  }
}
