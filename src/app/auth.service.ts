import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password){
   // Posts details to API server and returns user info

   return this.http.post('/api/auth.php',{
    username,
    password
   })
  }
}
