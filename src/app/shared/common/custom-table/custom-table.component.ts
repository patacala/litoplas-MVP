import { Component, OnInit, Input } from '@angular/core';
import { TableData } from '../../domain'

// interface TableData {
//   headers: DataKeys[];
//   dataColumns: any[]
// }

// // { description: 'Nombre de usuario' , field: 'name' }
// interface DataKeys {
//   description: string;
//   field: string
// }


@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

  @Input() tableData: TableData = {
    headers: [],
    dataColumns: []
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
