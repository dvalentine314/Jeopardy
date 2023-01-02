import { TestBed } from '@angular/core/testing';

import { ActivePromptService } from './active-prompt.service';

describe('ActivePromptService', () => {
  let service: ActivePromptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivePromptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
