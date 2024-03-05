import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Experience } from '../../../model/experience.model';


@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() language: string = "";
  @Input() experience: string = "";
  @Input() listExperience: Experience = { title: '', icon: '', experienceList: []};
   
  idiomas: string[] = [];
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.idiomas = ['es', 'en','ca', 'hr'];
    this.translate.addLangs(this.idiomas);
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }

  showInfo(url?: string) {
    window.open(url, '_blank');
  }

}
