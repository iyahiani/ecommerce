import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAuthentComponent } from './google-authent.component';

describe('GoogleAuthentComponent', () => {
  let component: GoogleAuthentComponent;
  let fixture: ComponentFixture<GoogleAuthentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleAuthentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleAuthentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
