
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { getBaseUrl } from '../shared/utils';
import { ExperienceComponent } from './home/experience/experience.component';

@NgModule({
  declarations: [
  HomeComponent,
  ChartComponent, 
  ProgressComponent,
  ExperienceComponent],
  imports: [
    curriculumRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }  
      }),
  ],
  providers: [
    // ShipsService,
    // { provide: LOCALE_ID, useValue: "es" }
  ],
  bootstrap: [HomeComponent]
})

export class CurriculumModule { }

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
  

