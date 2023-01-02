import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, from } from 'rxjs';
import { isAmount } from 'src/type-guards';
import { Category } from './stateTypes';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private questions: BehaviorSubject<Array<Category>> = new BehaviorSubject<any>(null);

  constructor() {
    fetch('./assets/questions.json')
      .then(response=>response.json())
      .then(json=>this.questions.next(json));
  }

  getQuestions = () => this.questions.pipe(filter(z=>z!=null));

  markAsRead(index: number, amount: number){
    let amountString = amount.toString();
    if(isAmount(amountString)){
      let questions = this.questions.value;
      questions[index][amountString].read =true;
      this.questions.next(questions);


    }

  }
}
