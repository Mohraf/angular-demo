import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users!: User[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.users = []
  }

  public getUsers(){
    this.http.get<any>('https://reqres.in/api/users').subscribe(res => {
      this.users = res.data;
      // data contains actual array of users
  });
  }

}
