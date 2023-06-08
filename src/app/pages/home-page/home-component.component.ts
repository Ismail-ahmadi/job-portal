import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  jobs$!: Observable<any[]>;
  constructor(private jobService: JobService){

  }
  ngOnInit(): void{
    this.jobs$ = this.jobService.getJobData()
    // this.sub = this.JobService .getJobData()
    // .subscribe(
    //   (data: any[]) => {
    //     const response = [];
    //     for (let key in data) {console.log(key)
    //       const responseItem = {
    //         id: key,
    //         ...data[key]
    //       }
    //       response.push(responseItem)
    //       this.jobs = response;
    //     }
    //     console.log(response)
    //   }
    // )
  }
}
