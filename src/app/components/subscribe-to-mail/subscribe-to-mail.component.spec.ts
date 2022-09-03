import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeToMailComponent } from './subscribe-to-mail.component';

describe('SubscribeToMailComponent', () => {
  let component: SubscribeToMailComponent;
  let fixture: ComponentFixture<SubscribeToMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeToMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeToMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
