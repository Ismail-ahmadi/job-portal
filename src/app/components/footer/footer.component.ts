import { Component } from '@angular/core';
import { faHome, faEnvelope, faPhone, faDownload, faCircleCheck, faBell, faFilter, faPen  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  Home = faHome;
  Email = faEnvelope;
  Phone = faPhone;
  fa1 = faDownload;
  fa2 = faBell;
  fa3 = faFilter;
  fa4 = faPen;

}
