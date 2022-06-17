import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksbuttonComponent } from './linksbutton.component';

describe('LinksbuttonComponent', () => {
  let component: LinksbuttonComponent;
  let fixture: ComponentFixture<LinksbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
