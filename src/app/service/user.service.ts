import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRespond } from '../model/user.model';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "";

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.base_url;
  }

  getUsers(value: number): Observable<UserRespond> {
    return this.http.get<UserRespond>( this.baseUrl + `/users/${value}`);
  }

}