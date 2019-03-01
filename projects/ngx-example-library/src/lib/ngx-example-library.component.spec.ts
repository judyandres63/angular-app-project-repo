import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxExampleLibraryComponent} from './ngx-example-library.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {configureTestSuite} from 'ng-bullet';

describe('NgxExampleLibraryComponent', () => {
  let component: NgxExampleLibraryComponent;
  let fixture: ComponentFixture<NgxExampleLibraryComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [NgxExampleLibraryComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxExampleLibraryComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('span'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exists <span> text', () => {
    fixture.detectChanges();
    const span = de.nativeElement;
    expect(span.innerText).toBeDefined();
  });
});
