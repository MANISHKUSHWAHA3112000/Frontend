import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginDtoComponent } from './admin-login-dto.component';

describe('AdminLoginDtoComponent', () => {
  let component: AdminLoginDtoComponent;
  let fixture: ComponentFixture<AdminLoginDtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginDtoComponent]
    });
    fixture = TestBed.createComponent(AdminLoginDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
