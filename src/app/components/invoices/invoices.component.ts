import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Invoice } from './model/invoice.model';
import { InvoicesService } from './services/invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  constructor( private formBuilder: FormBuilder, private invoicesService: InvoicesService ) { }

  invoices$: Observable<Invoice[]> = this.invoicesService.getInvoices$();

  listInvoices:Invoice[];

  ngOnInit() {
    this.invoices$.pipe().subscribe((response:Invoice[]) => {
      this.listInvoices=response;
      console.log(response);
      });
  }

}
