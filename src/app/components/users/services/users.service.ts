import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  public getUsers$(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/clientes`);
  }

  public getUserId$(id:string): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/clientes/${id}`);
  }

  public saveUser$(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/clientes`, user);
  }

}
