import { identifierName } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { KaramaService } from '../karama.service';
import { PaymentDataTableDataSource, PaymentDataTableItem } from './payment-data-table-datasource';

@Component({
  selector: 'app-payment-data-table',
  templateUrl: './payment-data-table.component.html',
  styleUrls: ['./payment-data-table.component.css']
})
export class PaymentDataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PaymentDataTableItem>;
  //dataSource: PaymentDataTableDataSource;
  dataSource=new MatTableDataSource();
  
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  constructor(private svkarama:KaramaService,) {
  }

  ngAfterViewInit(): void {
    
    
    
  }
 
} 
