import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { routes } from './app.router';
import { NavComponent } from './nav/nav.component';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
      ],
      imports: [routes],
      providers: [{provide: APP_BASE_HREF,  useValue: '/'}]
    })
    .compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bank of San Diego');
    // fixture.detectChanges();
    // compiled.querySelector('h1').textContent = 'foo'
    // expect(compiled.querySelector('h1').textContent).toContain('foo');
  }));
  
});
