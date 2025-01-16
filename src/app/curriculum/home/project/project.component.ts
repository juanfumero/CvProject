import { Component, Input, OnInit, signal } from '@angular/core';
import { Position } from '../../../shared/enum/position.enum';
import { Company } from '../../../shared/enum/company.enum';
import { YearCompany } from '../../../shared/enum/year-company.enum';
import { YearProject } from '../../../shared/enum/year-project.enum';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  showAllfirst = signal(false);
  showAllSecond = signal(false);
  showAllThird = signal(false);
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleShowAll(position: string) {
    if ( position === Position.First ) {      
      this.showAllfirst.update( value => !value);
    }
    if ( position === Position.Second ) {
      this.showAllSecond.update( value => !value);
    }
    if ( position === Position.Third ) {
      this.showAllThird.update( value => !value);
    }
  }


  public get getPosition(): typeof Position {
    return Position; 
  }

  public get getCompany(): typeof Company {
    return Company;
  }

  public get getYearProject(): typeof YearProject{
    return YearProject;
  }


}