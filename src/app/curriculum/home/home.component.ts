import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Experience } from '../../model/experience.model';
import { UserService } from '../../service/user.service';
import { UserRespond } from '../../model/user.model';
import { Company } from '../../shared/enum/company.enum';
import { YearCompany } from '../../shared/enum/year-company.enum';
import { VideoKey } from '../../shared/enum/video.enum';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  idiomas: string[] = [];
  selectLangue: string = "en";
  experienceJob: Experience = { title: '' , experienceList: []};
  experienceEducation: Experience = { title: '' , experienceList: []};
  experienceCourse: Experience = { title: '' , experienceList: []};
  isContactUs = signal(false);
  currentText = '';
  userInfo: UserRespond = {
    result: {
      id: "",
      idusername: "",
      username: "Juan Fumero",
      phone: "(+34) 634xxxxxx",
      email: "prueba@xxxx.com",
      address: "Barcelona"
    }
  };

  constructor(private translate: TranslateService, private userService: UserService) { }

  ngOnInit() {
    this.idiomas = ['es', 'en','ca', 'hr'];
    this.translate.addLangs(this.idiomas);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.addCurrentJobInfoGeneral();
    this.addInfoExperienceEducation();
    this.addInfoExperienceCourse();
  }

  addCurrentJobInfoGeneral() {
    this.translate.get('HOMNE.INFORMATION.CURRENT').subscribe((translated: string) => {
      this.currentText = translated;
      this.addInfoExeperienceJob();
    }); 
  }
  

  getInfoUser() {
    this.userService.getUsers(1).subscribe(
      (response) => {
        this.userInfo = response;
      }
    );
  }

  contactInfo() {
    this.isContactUs.update( value => !value);
    const element = document.getElementById('map');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }

  addInfoExeperienceJob() {
    this.experienceJob = {
      title: 'HOMNE.INFORMATION.WORK',
      icon: 'icon-suitcase',
      experienceList: [
        {
          rol: 'HOMNE.INFORMATION.SENIOR',
          company: this.getCompany.Between,
          yearsWorked: `- ${this.getYearCompany.Between} - ${this.currentText}`,
          description: 'HOMNE.INFORMATION.BETWEEN'
        },
        {
          rol: 'HOMNE.INFORMATION.SENIOR',
          company:  this.getCompany.Babel,
          yearsWorked: `- ${this.getYearCompany.Babel}`,
          description: 'HOMNE.INFORMATION.BABEL'
        },
        {
          rol: 'HOMNE.INFORMATION.SENIOR',
          company: this.getCompany.Alten,
          yearsWorked: `- ${this.getYearCompany.Alten}`,
          description: 'HOMNE.INFORMATION.ALTEN'
        },
        {
          rol: 'HOMNE.INFORMATION.INFO',
          company:  this.getCompany.Wikot,
          yearsWorked: `- ${this.getYearCompany.Wikot}`,
          description: 'HOMNE.INFORMATION.WIKOT'
        },
        {
          rol: 'HOMNE.INFORMATION.INFO',
          company:  this.getCompany.Avanade,
          yearsWorked: `- ${this.getYearCompany.Avanade}`,
          description: 'HOMNE.INFORMATION.AVANADE'
        },
        {
          rol: 'HOMNE.INFORMATION.INFO',
          company: this.getCompany.Synergy,
          yearsWorked: `- ${this.getYearCompany.Synergy}`,
          description: 'HOMNE.INFORMATION.SYNERGY'
        },
        {
          rol: 'HOMNE.INFORMATION.INFO',
          company: this.getCompany.Outsource,
          yearsWorked: `- ${this.getYearCompany.Outsource}`,
          description: 'HOMNE.INFORMATION.OUTSOURCE'
        },
        {
          rol: 'HOMNE.INFORMATION.JUNIOR',
          company: this.getCompany.ConsultoresMicor,
          yearsWorked: `- ${this.getYearCompany.ConsultoresMicor}`,
          description: 'HOMNE.INFORMATION.MICORP'
        }
      ]
    } 
  }

  addInfoExperienceEducation() {
     this.experienceEducation = {
      title: 'HOMNE.INFORMATION.EDUCATION',
      icon: 'icon-graduation-cap',
      experienceList: [
        {
          rol: 'HOMNE.INFORMATION.COMPUTERINFO',
          company: 'HOMNE.INFORMATION.UCAB',
          yearsWorked: ' - 2005 - 2012',
          description: 'HOMNE.INFORMATION.COMPUTERTITULO'
        },
        {
          rol: 'HOMNE.INFORMATION.STUDYTITLE',
          company: this.getCompany.Alten,
          yearsWorked: ' - 2017 - 2022',
          description: 'HOMNE.INFORMATION.QUALIFICATION'
        }
      ]
    } 
  }

  addInfoExperienceCourse() {
    this.experienceCourse = {
      title: 'HOMNE.INFORMATION.COURSE',
      icon: 'icon-books',
      experienceList: [
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE4',
          company: this.getCompany.Udemy,
          yearsWorked: '- 2023',
          description: 'HOMNE.INFORMATION.CREDENTIALREACT',
          isCredential: true,
          credentialInfo: 'http://ude.my/UC-3ae1e785-b030-4274-9a9c-e332e2bc6fc0'
        },
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE5',
          company: this.getCompany.Udemy,
          yearsWorked: '- 2022',
          description: 'HOMNE.INFORMATION.CREDENTIALREACTJS',
          isCredential: true,
          credentialInfo: 'http://ude.my/UC-HPCLSXNI'
        },
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE6',
          company: this.getCompany.Udemy,
          yearsWorked: '- 2020',
          description: 'HOMNE.INFORMATION.CREDENTIALIONIC3',
          isCredential: true,
          credentialInfo: 'http://ude.my/UC-ZQ6ND0Z2'
        },
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE1',
          company: this.getCompany.Wikot,
          yearsWorked: '- 2016',
          description: 'HOMNE.INFORMATION.CREDENTIALCOURSE1'
        },
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE2',
          company: this.getCompany.Wikot,
          yearsWorked: '- 2016',
          description: 'HOMNE.INFORMATION.CREDENTIALCORUSE2'
        },
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE3',
          company: this.getCompany.Wikot,
          yearsWorked: '- 2016',
          description: 'HOMNE.INFORMATION.CREDENTIALCORUSE3'
        }
      ]
    } 
  }

  public get getCompany(): typeof Company {
    return Company;
  }

  public get getYearCompany(): typeof YearCompany {
    return YearCompany;
  }

  public get getVideoKey(): typeof VideoKey {
    return VideoKey;
  }
  
  switchLanguage(language: string) {
    this.selectLangue = language;
    this.translate.use(language);        
    this.addCurrentJobInfoGeneral();
  }

}
