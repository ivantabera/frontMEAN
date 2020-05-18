import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseparallaxefxComponent } from './mouseparallaxefx.component';

describe('MouseparallaxefxComponent', () => {
  let component: MouseparallaxefxComponent;
  let fixture: ComponentFixture<MouseparallaxefxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseparallaxefxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseparallaxefxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
