import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodeComponent } from './uplode.component';

describe('UplodeComponent', () => {
  let component: UplodeComponent;
  let fixture: ComponentFixture<UplodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
