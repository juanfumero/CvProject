import { Component, Input, OnInit } from '@angular/core';
import { Work } from '../../../model/work.model';

@Component({
  selector: 'app-work',
  standalone: false,
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  workExperience: Work[] = [];

  constructor() { }

  ngOnInit(): void {
    this.addListWork();
  }

  addListWork() {
    this.workExperience = [
        {
            company: 'Commerzbank',
            project: 'Angular',
            image: 'commerzbank.jpg'
        },
        {
            company: 'HTG',
            project: 'Angular',
            image: 'htgroup.png'
        },
        {
            company: 'Portic',
            project: 'Angular',
            image: 'portic.jpg'
        },
        {
            company: 'Banco Banesco',
            project: 'Android',
            image: 'banesco.jpg'
        },
        {
            company: 'Banco Mercantil',
            project: 'Android',
            image: 'mercantil.jpg'
        },
        {
            company: 'Navantia',
            project: 'Angular',
            image: 'navantia.jpg'
        },
        {
            company: 'CGT',
            project: 'Vue 3',
            image: 'cgt.jpg'
        },
        {
            company: 'Estrella Damm',
            project: 'Window Phone',
            image: 'estrelladamm.jpg'
        }
    ]
  }



}