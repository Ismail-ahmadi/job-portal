import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsPgaeComponent } from './job-details-pgae.component';

describe('JobDetailsPgaeComponent', () => {
  let component: JobDetailsPgaeComponent;
  let fixture: ComponentFixture<JobDetailsPgaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobDetailsPgaeComponent]
    });
    fixture = TestBed.createComponent(JobDetailsPgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
