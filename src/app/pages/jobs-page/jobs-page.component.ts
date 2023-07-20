import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent {
  jobs1$!: Observable<any[]>;
  constructor(private jobService: JobService){

  }
  ngOnInit(): void{
    this.jobs1$ = this.jobService.getJobData()
  }
}
