// src/app/app.module.ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule, MatButtonModule } from '@angular/material';

import { AppComponent } from "./app.component";
import { QuestionFormComponent } from "./question-form/question-form.component";
import { ResultsComponent } from './results/results.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { CreateQuizComponent } from "./create-quiz/create-quiz.component";
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'create-quiz', component: CreateQuizComponent },
  { path: ':quizId', component: QuestionsComponent },
  { path: '', redirectTo: "welcome", pathMatch: "prefix" },
];

@NgModule({
  declarations: [AppComponent, QuestionFormComponent, ResultsComponent, WelcomeComponent, QuestionsComponent,CreateQuizComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule, MatCardModule, MatButtonModule,FormsModule],
  providers: [WelcomeComponent],
  bootstrap: [AppComponent],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}
