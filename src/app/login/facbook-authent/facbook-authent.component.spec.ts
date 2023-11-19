import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacbookAuthentComponent } from './facbook-authent.component';

describe('FacbookAuthentComponent', () => {
  let component: FacbookAuthentComponent;
  let fixture: ComponentFixture<FacbookAuthentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacbookAuthentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacbookAuthentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
