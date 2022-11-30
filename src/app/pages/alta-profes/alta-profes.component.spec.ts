import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaProfesComponent } from './alta-profes.component';

describe('AltaProfesComponent', () => {
  let component: AltaProfesComponent;
  let fixture: ComponentFixture<AltaProfesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaProfesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaProfesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
