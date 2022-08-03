// src/app/quiz.model.ts
export class Choice {
   option: string;
   isCorrect: boolean;
   _id: string;
   constructor(option: string , _id: string) {
      this.option = option;
      this._id = _id; 
      this.isCorrect = false;
   }
}
export class Question {
  public answer: number;
  public question: string;
  public answers: Choice[];
  public explanation: string;
  public _id: string;
}
export class Quiz {
  public instructions: string;
  public name: string;
  public _id: string;
  public questions: Question[];
}
export class Answers {
  constructor(public values: Choice[] = []) {}
}
