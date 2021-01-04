import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPrincipalComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoPrincipalComponent;
  let fixture: ComponentFixture<ContactoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
