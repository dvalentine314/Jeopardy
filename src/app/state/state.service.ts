import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
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

  getQuestions = () => this.questions.asObservable();
}
