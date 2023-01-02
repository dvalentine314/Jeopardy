import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { isAmount } from 'src/type-guards';
import { StateService } from '../state/state.service';
import { Prompt } from '../state/stateTypes';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {

  promptText$: Observable<Prompt>=
    new Observable<Prompt>();

  showResponse: boolean= false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private state: StateService
  ){}
  ngOnInit(): void {
    this.promptText$ = combineLatest([this.activatedRoute.paramMap,this.state.getQuestions()])
      .pipe(map(([paramMap, questions])=>{
        const category = paramMap.get('category');
        const amount  =  paramMap.get('amount');
        if(category!==null && amount!==null&& isAmount(amount)){
          let categoryObject = questions[parseInt(category,10)];
          let promptObject = categoryObject[amount];
          return {
            prompt: promptObject.prompt,
            response: promptObject.response,
            read: false
          };
        }else{
          return {prompt:'',response:'',read:true};
        }
      }));
  }



}
