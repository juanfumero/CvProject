import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  idiomas: string[] = [];
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.idiomas = ['es', 'en','ca', 'hr'];
    this.translate.addLangs(this.idiomas);
    // Establecer idioma por defecto
    this.translate.setDefaultLang('en');
    // Cargar idioma actual
    this.translate.use('en');
  }


  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
