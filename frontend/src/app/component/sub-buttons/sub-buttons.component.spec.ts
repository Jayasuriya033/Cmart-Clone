import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubButtonsComponent } from './sub-buttons.component';

describe('SubButtonsComponent', () => {
  let component: SubButtonsComponent;
  let fixture: ComponentFixture<SubButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
