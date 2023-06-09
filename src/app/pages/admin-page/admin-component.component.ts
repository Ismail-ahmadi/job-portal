import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, take, tap } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent {
  isSubmitted = false;
  constructor( private jobService: JobService, private router: Router){}
  onSubmit(form : NgForm){
    // console.log("FROM TS::", form);
    this.jobService.addNewJobPost(form.form.value).pipe(take(1), tap(() => this.isSubmitted =true), delay(5000)).subscribe(
      data => {
        console.log(data)
        form.reset();
        this.router.navigateByUrl('/')
      }
    );
  }
}
