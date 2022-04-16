import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberListItemComponent } from './member-list-item.component';

describe('MemberListItemComponent', () => {
  let component: MemberListItemComponent;
  let fixture: ComponentFixture<MemberListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
