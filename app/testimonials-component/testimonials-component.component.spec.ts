import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsComponentComponent } from './testimonials-component.component';

describe('TestimonialsComponentComponent', () => {
  let component: TestimonialsComponentComponent;
  let fixture: ComponentFixture<TestimonialsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsComponentComponent]
    });
    fixture = TestBed.createComponent(TestimonialsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
