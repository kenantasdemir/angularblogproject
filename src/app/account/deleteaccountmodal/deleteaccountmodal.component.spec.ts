import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteaccountmodalComponent } from './deleteaccountmodal.component';

describe('DeleteaccountmodalComponent', () => {
  let component: DeleteaccountmodalComponent;
  let fixture: ComponentFixture<DeleteaccountmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteaccountmodalComponent]
    });
    fixture = TestBed.createComponent(DeleteaccountmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
