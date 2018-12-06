import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtmComponent } from './atm.component';

describe('AtmComponent', () => {
  let component: AtmComponent;
  let fixture: ComponentFixture<AtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  // describe('deposit', () => {
  //   it('should increase balance on service when a user deposits', () => {
  //     const compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelectorAll('button').length).toEqual(4)
  //   })
  // })


});
