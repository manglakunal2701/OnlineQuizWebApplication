import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { Question, Quiz,Answers } from '../quiz.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup , FormArray, FormBuilder, Validators, FormControl } from '@angular/forms' 

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent {
  answers: Answers;
  quizForm:FormGroup;
  public quiz:Quiz[];
  public response:any;
  constructor(private http: HttpClient,private fb:FormBuilder){
      this.quizForm = this.fb.group({
        instructions:new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        questions: this.fb.array([])
      })
  }
  get name(){return this.quizForm.get('name')}
  get instructions(){return this.quizForm.get('instructions')}
  get question(){return this.quizForm.get('questions')}
  ngOnInit(){
   this.addQuestion();
  }

  getQuestions(): FormArray {
    return this.quizForm.get("questions") as FormArray  
  }

  getAnswers(ques): FormArray {
    return ques.controls.answers as FormArray  
  }

  newQuestion(){
   let myQuestion= this.fb.group({
      answer: 0,
      question: new FormControl('',[Validators.required]),
      answers: this.fb.array([]),
      explanation: ""
    })
  
    for(let i=0;i<4;i++){
      let answers: FormArray = myQuestion.get("answers") as FormArray;
      answers.push(this.fb.group({
        option:'',
        isCorrect:false
      }))
    }
    return myQuestion
  }
  addQuestion() {  
     this.getQuestions().push(this.newQuestion()); 
  }  
  removeQuestion(i:number) {  
    this.getQuestions().removeAt(i);  
  } 
  showMsg: boolean = false;
  onSubmit(){
    this.http.post('http://localhost:3000/quizes',this.quizForm.value)
    .subscribe((res)=>{
        console.log(res);
        this.quizForm.reset();
        this.showMsg= true;
        this.response=res;
    })
   
  
  }
 
}


function subscribe(arg0: (result: any) => void) {
  throw new Error('Function not implemented.');
}

