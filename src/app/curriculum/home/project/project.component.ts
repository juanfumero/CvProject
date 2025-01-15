import { Component, Input, OnInit, signal } from '@angular/core';

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
    if ( position === 'first') {      
      this.showAllfirst.update( value => !value);
    }
    if ( position === 'second') {
      this.showAllSecond.update( value => !value);
    }
    if ( position === 'third') {
      this.showAllThird.update( value => !value);
    }
  }


}