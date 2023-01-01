import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {

  promptText$: Observable<{promptText:string, responseText:string}>=
    new Observable<{promptText:string, responseText:string}>();

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
        if(category!==null && amount!==null&&this.isAmount(amount)){
          let categoryObject = questions[parseInt(category,10)];
          let promptObject = categoryObject[amount];
          return {promptText: promptObject.prompt,
            responseText: promptObject.response};
        }else{
          return {promptText:'',responseText:''};
        }
      }));
  }

  private isAmount(element:String): element is '100'|'200'|'300'|'400'|'500'{
    switch (element){
      case'100': case '200':case '300': case'400':case'500': return true;
      default: return false;
    }
  }

}
