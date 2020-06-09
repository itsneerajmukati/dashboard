import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IurunComponent } from './iurun.component';

describe('IurunComponent', () => {
  let component: IurunComponent;
  let fixture: ComponentFixture<IurunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IurunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IurunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
