import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userUrl = "http://192.168.43.78:3000/users";

  handleError(functionName: any, data: any) {
    
  }

  addUser(user:any) {
    return this.http.post(this.userUrl, user);
  }
}
