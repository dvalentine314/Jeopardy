import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivePromptService } from '../state/active-prompt.service';

@Component({
  selector: 'app-speaker-notes',
  templateUrl: './speaker-notes.component.html',
  styleUrls: ['./speaker-notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerNotesComponent implements OnInit {

  $activeMessage: Observable<{prompt: string, response: string}|null> = this.activePrompt.activeMessage();
  test:{prompt: string, response: string}|null = {prompt: 'string', response: ''};
  standard ={cat:"woof"};
  prompt2: string="";

  constructor(private activePrompt: ActivePromptService,
    private changeDetector: ChangeDetectorRef){

  }

  ngOnInit(): void {
    //this.$activeMessage = this.activePrompt.activeMessage();

    this.$activeMessage.subscribe(z=>{
      console.log(z);
      this.test = z;
      console.log(z?.prompt);
      this.prompt2 = z?.prompt||"";
      this.changeDetector.detectChanges();
    })
  }

}
