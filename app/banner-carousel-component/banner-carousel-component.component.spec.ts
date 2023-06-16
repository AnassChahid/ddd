import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCarouselComponentComponent } from './banner-carousel-component.component';

describe('BannerCarouselComponentComponent', () => {
  let component: BannerCarouselComponentComponent;
  let fixture: ComponentFixture<BannerCarouselComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerCarouselComponentComponent]
    });
    fixture = TestBed.createComponent(BannerCarouselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
