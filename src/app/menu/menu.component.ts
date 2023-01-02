import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { StateService } from '../state/state.service';
import { Prompt } from '../state/stateTypes';

class menuItemViewModel {
  title:string = '';
  one?: Prompt;
  two?: Prompt;
  three?: Prompt;
  four?: Prompt;
  five?: Prompt;

};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems$: Observable<Array<menuItemViewModel>> = new Observable();

  constructor(
    private state: StateService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.menuItems$ = this.state.getQuestions().pipe(
        filter(z=>z!=null),
        map(questions=>{
      return questions.map(question=>{
        return {
          title: question.title,
          one: question[100],
          two: question[200],
          three: question[300],
          four: question[400],
          five: question[500]
        }
      })
    }))
  }

  selectItem(index: number, amount: number){
    this.state.markAsRead(index,amount);
    this.router.navigate(['/','prompt',index,amount], { relativeTo: this.route });

  }

}
