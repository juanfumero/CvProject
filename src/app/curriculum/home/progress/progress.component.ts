import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: false,
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() percentage: number = 0;
  @Input() skill: string = '';
  @Input() numPercentage: string = '';
  circumference: number = 2 * Math.PI * 40;
  offset: number = 0;

  constructor() { }

  ngOnInit(): void {
  }



}