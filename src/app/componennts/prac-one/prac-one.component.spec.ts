import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracOneComponent } from './prac-one.component';

describe('PracOneComponent', () => {
  let component: PracOneComponent;
  let fixture: ComponentFixture<PracOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
