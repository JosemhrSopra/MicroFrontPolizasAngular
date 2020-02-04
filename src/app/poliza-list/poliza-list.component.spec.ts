import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaListComponent } from './poliza-list.component';

describe('PolizaListComponent', () => {
  let component: PolizaListComponent;
  let fixture: ComponentFixture<PolizaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
