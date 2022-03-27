import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users!: User[];

  constructor(private http: HttpClient, private authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.users = []
  }

  public getUsers(){
    this.http.get<any>('https://reqres.in/api/users').subscribe(res => {
      this.users = res.data;
      // data contains actual array of users
  });
  }

  viewProfile(id: any){
    this.authService.getUserProfile(id);
    this.router.navigate(['user-profile/' + id]);
  }

}
