import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenershipComponent } from './partenership.component';

describe('PartenershipComponent', () => {
  let component: PartenershipComponent;
  let fixture: ComponentFixture<PartenershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartenershipComponent]
    });
    fixture = TestBed.createComponent(PartenershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
