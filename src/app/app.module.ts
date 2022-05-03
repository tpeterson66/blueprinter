import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ApiService } from './services/api.service'
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { ManagerComponent } from './manager/manager.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SvdComponent } from './svd/svd.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DesignComponent } from './design/design.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  { path: 'editor', component: ManagerComponent },
  { path: 'design', component: DesignComponent },
  { path: 'blueprint', component: CreatorComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    ManagerComponent,
    NavbarComponent,
    SvdComponent,
    HomepageComponent,
    QuestionnaireComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
