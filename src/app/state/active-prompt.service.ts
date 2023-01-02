import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivePromptService {

  readonly #sharedWorker: SharedWorker;
  #activeMessage= new BehaviorSubject<{prompt: string, response: string}>({
    prompt:'',
    response:''
  });
  constructor() {
    this.#sharedWorker = new SharedWorker('assets/shared-worker.js');
    this.#sharedWorker.port.onmessage = (e) => {
      this.#activeMessage.next(e.data);
    }
  }

  updatePrompt(prompt: string, response: string){
    this.#sharedWorker.port.postMessage({prompt: prompt, response:response});
  }
}
