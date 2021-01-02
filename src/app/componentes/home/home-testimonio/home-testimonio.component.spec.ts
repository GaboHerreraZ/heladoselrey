import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestimonioComponent } from './home-testimonio.component';

describe('HomeTestimonioComponent', () => {
  let component: HomeTestimonioComponent;
  let fixture: ComponentFixture<HomeTestimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTestimonioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTestimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
