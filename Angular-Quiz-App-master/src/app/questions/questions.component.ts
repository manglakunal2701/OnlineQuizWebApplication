import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { QuestionsService } from '../questions.service';
import { Quiz, Answers, Choice, Question } from '../quiz.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  quiz: Quiz;
  answers: Answers;
  questions: Question[];
  currentQuestionIndex: number;
  showResults = false;
  constructor(private route: ActivatedRoute, public questionsService: QuestionsService){}

  ngOnInit() {

    this.questionsService.getQuiz(this.route.snapshot.params.quizId)
      .subscribe(quiz => {
        this.questions = quiz.questions;
        this.answers = new Answers();
        this.currentQuestionIndex = 0;
      });
  }

  updateChoice(choice: Choice){
    let myChoice = new Choice(choice.option, choice._id);
    this.answers.values[this.currentQuestionIndex] = myChoice;

  }

  nextOrViewResults(){
    if (this.currentQuestionIndex === this.questions.length - 1){
      this.answers=this.validateAnswers(this.answers);
      this.showResults = true;
      return;
    }

    this.currentQuestionIndex++;
  }
  reset(){
    this.quiz = undefined;
    this.questions = undefined;
    this.answers = undefined;
    this.currentQuestionIndex = undefined;
  }

  validateAnswers(answers: Answers): Answers {
    for(let i=0;i<answers.values.length;i++){
      let question:Question = this.questions[i];
      let choice:Choice = answers.values[i];
      if(question.answers[question.answer]._id === choice._id){
            choice.isCorrect=true;
      }
      answers.values[i]=choice;
    }
    return answers;
    
  }
}


