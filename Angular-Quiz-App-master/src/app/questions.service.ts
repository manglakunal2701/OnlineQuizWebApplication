// src/app/questions.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Quiz, Question } from './quiz.model';

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  public getQuizzes() {
    return this.http.get<Quiz[]>('http://:3000/quizes');
  }

  public getQuiz(quizId: string) {
    return this.http.get<Quiz>('http://localhost:3000/quizes/'+quizId);
  }
}
