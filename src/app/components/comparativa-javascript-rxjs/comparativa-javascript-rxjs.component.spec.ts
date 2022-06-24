import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativaJavascriptRxjsComponent } from './comparativa-javascript-rxjs.component';

describe('ComparativaJavascriptRxjsComponent', () => {
  let component: ComparativaJavascriptRxjsComponent;
  let fixture: ComponentFixture<ComparativaJavascriptRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativaJavascriptRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativaJavascriptRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
