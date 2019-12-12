import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SideNavComponent } from './side-nav/side-nav.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [AppComponent, SideNavComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'men-o-site'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('men-o-site');
  });
});
