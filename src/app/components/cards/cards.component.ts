import { Component, Input } from '@angular/core';
import { Job } from 'src/app/model/job.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() job! : Job;

}
