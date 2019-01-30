import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from "@angular/router/testing";
import { Routes, Router } from '@angular/router';
import { routes } from './app.router';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';


describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('router', () => {

  let location: Location
  let router: Router
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AtmComponent,
        TellerComponent,
        NavComponent,
        ContactComponent,
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });
//uses router to navigate to empty route, checks to ensure rerouted to /atm
  it('should redirect to /atm from ""', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/atm');
  }));

  //grabs array of links from nav bar, clicks link and checks to ensure navigation to the correct path.
  it('should correctly navigate when linked is clicked', fakeAsync(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const links = compiled.querySelectorAll('a')
    links[1].click()
    tick()
    expect(location.path()).toBe('/teller');
    links[0].click()
    tick()
    expect(location.path()).toBe('/atm')
    links[2].click()
    tick()
    expect(location.path()).toBe('/contact')
  }))
  

});
