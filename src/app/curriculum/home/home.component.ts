import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Experience } from '../../model/experience.model';
import { UserService } from '../../service/user.service';
import { UserRespond } from '../../model/user.model';

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
  isContactUs: boolean = false;
  userInfo: UserRespond = {
    result: {
      id: "",
      idusername: "",
      username: "",
      phone: "",
      email: "",
      address: ""
    }
  };

  constructor(private translate: TranslateService, private userService: UserService) { }

  ngOnInit() {
    this.idiomas = ['es', 'en','ca', 'hr'];
    this.translate.addLangs(this.idiomas);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.addInfoExeperienceJob();
    this.addInfoExperienceEducation();
    this.addInfoExperienceCourse();
    this.getInfoUser();
  }

  getInfoUser() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.userInfo = response;
      },
      (error) => {
        console.error('Error fetching users: ', error);
      }
    );
  }

  contactInfo() {
    this.isContactUs = true;
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
          company: 'Babel',
          yearsWorked: ' - 2022 - Current',
          description: 'HOMNE.INFORMATION.BABEL'
        },
        {
          rol: 'HOMNE.INFORMATION.SENIOR',
          company: 'Alten',
          yearsWorked: ' - 2017 - 2022',
          description: 'HOMNE.INFORMATION.ALTEN'
        },
        {
          rol: 'HOMNE.INFORMATION.INFO',
          company: 'Wikot',
          yearsWorked: ' - 2016 - 2017',
          description: 'HOMNE.INFORMATION.WIKOT'
        },
        {
          rol: 'HOMNE.INFORMATION.INFO',
          company: 'Avanade',
          yearsWorked: ' - 2015 - 2016',
          description: 'HOMNE.INFORMATION.AVANADE'
        },
        {
          rol: 'HOMNE.INFORMATION.INFO',
          company: 'Synergy-GB',
          yearsWorked: ' - 2013 - 2015',
          description: 'HOMNE.INFORMATION.SYNERGY'
        },
        {
          rol: 'HOMNE.INFORMATION.INFO',
          company: 'Outsource Software, C.A.',
          yearsWorked: ' - 2013',
          description: 'HOMNE.INFORMATION.OUTSOURCE'
        },
        {
          rol: 'HOMNE.INFORMATION.JUNIOR',
          company: 'Consultores micorp',
          yearsWorked: ' - 2012',
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
          company: 'Universidad Católica Andrés Bello',
          yearsWorked: ' - 2005 - 2012',
          description: 'HOMNE.INFORMATION.COMPUTERTITULO'
        },
        {
          rol: 'HOMNE.INFORMATION.STUDYTITLE',
          company: 'Alten',
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
          company: 'Udemy',
          yearsWorked: '- 2023',
          description: 'HOMNE.INFORMATION.CREDENTIALREACT',
          isCredential: true,
          credentialInfo: 'http://ude.my/UC-3ae1e785-b030-4274-9a9c-e332e2bc6fc0'
        },
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE5',
          company: 'Udemy',
          yearsWorked: '- 2022',
          description: 'HOMNE.INFORMATION.CREDENTIALREACTJS',
          isCredential: true,
          credentialInfo: 'http://ude.my/UC-HPCLSXNI'
        },
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE6',
          company: 'Udemy',
          yearsWorked: '- 2020',
          description: 'HOMNE.INFORMATION.CREDENTIALIONIC3',
          isCredential: true,
          credentialInfo: 'http://ude.my/UC-ZQ6ND0Z2'
        },
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE1',
          company: 'Wikot',
          yearsWorked: '- 2016',
          description: 'HOMNE.INFORMATION.CREDENTIALCOURSE1'
        },
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE2',
          company: 'Wikot',
          yearsWorked: '- 2016',
          description: 'HOMNE.INFORMATION.CREDENTIALCOURSE2'
        },
        {
          rol: 'HOMNE.INFORMATION.COURSETITLE3',
          company: 'Wikot',
          yearsWorked: '- 2016',
          description: 'HOMNE.INFORMATION.CREDENTIALCOURSE3'
        }
      ]
    } 
  }

  switchLanguage(language: string) {
    this.selectLangue = language;
    this.translate.use(language);
  }

}
