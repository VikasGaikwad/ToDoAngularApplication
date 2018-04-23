import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelNavComponent } from './label-nav.component';

describe('LabelNavComponent', () => {
  let component: LabelNavComponent;
  let fixture: ComponentFixture<LabelNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
