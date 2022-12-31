import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { StateService } from '../state/state.service';

type menuItemViewModel = {title:string};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems$: Observable<Array<menuItemViewModel>> = new Observable();

  constructor(private state: StateService){

  }

  ngOnInit(): void {
    this.state.getQuestions().subscribe(questions=>{
      ///console.log(questions);

    });

    this.menuItems$ = this.state.getQuestions().pipe(
        filter(z=>z!=null),
        map(questions=>{
      return questions.map(question=>{
        return {
          title: question.title
        }
      })
    }))
  }

}
