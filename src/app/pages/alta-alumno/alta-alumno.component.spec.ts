import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAlumnoComponent } from './alta-alumno.component';

describe('AltaAlumnoComponent', () => {
  let component: AltaAlumnoComponent;
  let fixture: ComponentFixture<AltaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
