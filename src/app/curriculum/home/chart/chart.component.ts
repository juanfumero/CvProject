import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  standalone: false,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() percentage: number = 0;
  @Input() skill: string = '';
  @Input() numPercentage: string = '';
  circumference: number = 2 * Math.PI * 40;
  offset: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log('imprimo mi percentage', this.percentage);
    this.updateOffset();
  }

  ngOnChanges(): void {
    this.updateOffset();
  }

  private updateOffset(): void {
    const offset = this.circumference - (this.percentage / 100) * this.circumference;
    this.offset = offset;
  }
}