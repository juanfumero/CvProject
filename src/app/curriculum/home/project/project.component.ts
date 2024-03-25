import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  showAllfirst: boolean = false;
  showAllSecond: boolean = false;
  showAllThird: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleShowAll(position: string) {
    if ( position === 'first') {
      this.showAllfirst = !this.showAllfirst;
    }
    if ( position === 'second') {
      this.showAllSecond = !this.showAllSecond;
    }
    if ( position === 'third') {
      this.showAllThird = !this.showAllThird;
    }
  }


}