import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsdirectionComponent } from './mapsdirection.component';

describe('MapsdirectionComponent', () => {
  let component: MapsdirectionComponent;
  let fixture: ComponentFixture<MapsdirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsdirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsdirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
