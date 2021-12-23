import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  pageTitle:string="HTTP Service in Angular";
  users:any;
  errorMessage:string="Loading..."
  toDate: Date = new Date();
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data)=>{
      this.users=data;
    },(err)=>{
      this.errorMessage="Some internal issue while making API call"
    })
  }

}
