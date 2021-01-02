import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHistoriaComponent } from './home-historia.component';

describe('HomeHistoriaComponent', () => {
  let component: HomeHistoriaComponent;
  let fixture: ComponentFixture<HomeHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
