import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventemittersComponent } from './eventemitters.component';

describe('EventemittersComponent', () => {
  let component: EventemittersComponent;
  let fixture: ComponentFixture<EventemittersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventemittersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventemittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
