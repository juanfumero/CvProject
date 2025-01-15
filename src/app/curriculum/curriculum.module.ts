
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { ExperienceComponent } from './home/experience/experience.component';
import { ProviderComponent } from './home/provider/provider.component';
import { ContactComponent } from './home/contact/contact.component';
import { WorkComponent } from './home/work/work.component';
import { ProjectComponent } from './home/project/project.component';
import { UserService } from '../service/user.service';

@NgModule({ declarations: [
        HomeComponent,
        ChartComponent,
        ProgressComponent,
        ExperienceComponent,
        ProviderComponent,
        ContactComponent,
        WorkComponent,
        ProjectComponent
    ],
    bootstrap: [HomeComponent], imports: [curriculumRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })], providers: [
        UserService,
        provideHttpClient(withInterceptorsFromDi())
    ] })

export class CurriculumModule { }

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
  

