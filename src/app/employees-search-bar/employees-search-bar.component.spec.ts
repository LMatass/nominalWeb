import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesSearchBarComponent } from './employees-search-bar.component';

describe('SearchBarComponent', () => {
  let component: EmployeesSearchBarComponent;
  let fixture: ComponentFixture<EmployeesSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
