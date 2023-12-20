import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAuthentComponent } from './facbook-authent.component';

describe('FacbookAuthentComponent', () => {
  let component: FacebookAuthentComponent;
  let fixture: ComponentFixture<FacebookAuthentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookAuthentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookAuthentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
