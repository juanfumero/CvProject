
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { curriculumRoutingModule } from './curriculum-routing.module';
import { ChartComponent } from './home/chart/chart.component';
import { ProgressComponent } from './home/progress/progress.component';

@NgModule({
  declarations: [
  HomeComponent,
  ChartComponent, 
  ProgressComponent],
  imports: [
    curriculumRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // ShipsService,
    // { provide: LOCALE_ID, useValue: "es" }
  ],
  bootstrap: [HomeComponent]
})

export class CurriculumModule { }
