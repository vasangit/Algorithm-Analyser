import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataqualityComponent } from './dataquality.component';

describe('DataqualityComponent', () => {
  let component: DataqualityComponent;
  let fixture: ComponentFixture<DataqualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataqualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
