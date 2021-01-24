import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faUser = faUser;
  username: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.getUserName();
  }

  logOut() {
    this.authService.logOut();
  }
}
