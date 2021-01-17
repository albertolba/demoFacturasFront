import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../model/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  public getInvoices$(): Observable<Invoice[]> {
    return this.httpClient.get<Invoice[]>(`${this.apiUrl}/facturas`);
  }

}
