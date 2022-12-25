import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldocComponent } from './personaldoc.component';

describe('PersonaldocComponent', () => {
  let component: PersonaldocComponent;
  let fixture: ComponentFixture<PersonaldocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaldocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaldocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
