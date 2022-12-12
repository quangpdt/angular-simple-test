import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers : string[] = [] ;
  public newCustomer: string;


  ngOnInit() {
  }

  public addCustomer() {
    if (!this.newCustomer || this.newCustomer.length === 0) {
      return;
    }
    this.customers.push(this.newCustomer.trim());
    this.newCustomer = "";
  }

}
