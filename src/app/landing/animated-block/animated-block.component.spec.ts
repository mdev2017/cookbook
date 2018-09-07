import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBlockComponent } from './animated-block.component';

describe('AnimationBlockComponent', () => {
  let component: AnimatedBlockComponent;
  let fixture: ComponentFixture<AnimatedBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedBlockComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
