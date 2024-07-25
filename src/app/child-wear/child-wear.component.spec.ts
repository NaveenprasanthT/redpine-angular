import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWearComponent } from './child-wear.component';

describe('ChildWearComponent', () => {
  let component: ChildWearComponent;
  let fixture: ComponentFixture<ChildWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildWearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
