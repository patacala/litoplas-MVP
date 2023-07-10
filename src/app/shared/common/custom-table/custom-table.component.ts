import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
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
  styleUrls: ['./custom-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableComponent implements OnChanges, OnInit, OnDestroy {

  @Input() tableData: TableData = {
    headers: [],
    dataColumns: []
  }
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('Changes ->', changes)
  }

  ngOnInit(): void {
    console.log('Init')
  }

  ngOnDestroy(): void {
    console.log('Destroy')
  }

  countRender(): boolean {
    console.log('Render Table')
    return true;
  }

}
