import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:  AuthService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value


    this.Auth.getUserDetails(username,password).subscribe(data =>{
      if(data.success){
        //redirect to admin
      }else{
        window.alert(data.message)
      }
    })
    console.log(username,password)
  }
}
