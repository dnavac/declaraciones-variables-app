import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracionesVariablesComponent } from './declaraciones-variables.component';

describe('DeclaracionesVariablesComponent', () => {
  let component: DeclaracionesVariablesComponent;
  let fixture: ComponentFixture<DeclaracionesVariablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclaracionesVariablesComponent]
    });
    fixture = TestBed.createComponent(DeclaracionesVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
