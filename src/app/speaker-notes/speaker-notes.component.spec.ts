import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerNotesComponent } from './speaker-notes.component';

describe('SpeakerNotesComponent', () => {
  let component: SpeakerNotesComponent;
  let fixture: ComponentFixture<SpeakerNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
