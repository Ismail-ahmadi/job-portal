import { Injectable } from '@angular/core';
import { Job } from '../model/job.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobData = [];
  constructor(private http: HttpClient) {}

  getJobData() : Observable<any> {
    return this.http.get("https://job-portal-e3438-default-rtdb.firebaseio.com/jobs.json").pipe(
      map(responseObj => {
        const resultArr = [];
        const objResponse = responseObj as Job[];
        for (let item in objResponse){
          resultArr.push({ ...objResponse[item], id: item })
        }
        return resultArr;
      }
    ))
  }
}

