import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintProgramComponent } from './print-program.component';

describe('PrintProgramComponent', () => {
  let component: PrintProgramComponent;
  let fixture: ComponentFixture<PrintProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
