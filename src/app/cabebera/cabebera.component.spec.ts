import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeberaComponent } from './cabebera.component';

describe('CabeberaComponent', () => {
  let component: CabeberaComponent;
  let fixture: ComponentFixture<CabeberaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeberaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeberaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
