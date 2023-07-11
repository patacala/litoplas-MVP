import { Component, OnInit, Input, Output, OnChanges, OnDestroy, SimpleChanges, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { TableData } from '../../domain';
import { faTrash, faPencil, IconDefinition } from '@fortawesome/free-solid-svg-icons';

// interface TableData {
//   headers: DataKeys[];
//   dataColumns: any[]
// }

// // { description: 'Nombre de usuario' , field: 'name' }
// interface DataKeys {
//   description: string;
//   field: string
// }

const icons: any = {
  faTrash: faTrash,
  faPencil: faPencil
}

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

  @Output() onUpdate = new EventEmitter<any>()
  @Output() onDelete = new EventEmitter<any>()
  
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

  getIcon(menuIcon: string): IconDefinition {
    return icons[menuIcon];
  }

  onUpdateClick(item: any) {
    this.onUpdate.emit(item);
  }

  onDeleteClick(item: any) {
    this.onDelete.emit(item);
  }

}
